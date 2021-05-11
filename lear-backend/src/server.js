import express from 'express';
import bodyParser, { json } from 'body-parser';
import path from 'path';
import queriesfile from './queries'
import cors from "cors";


const app = express();
//prepare for realease
app.use(express.static(path.join(__dirname, '/build')));

//https://bezkoder.com/node-express-sequelize-postgresql/
// parse requests of content-type - application/json
app.use(bodyParser.json());

//needed
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  //res.setHeader('Access-Control-Allow-Origin', 'database-1.cbsg9s7iau2c.us-east-2.rds.amazonaws.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/hello', (req, res) => res.send('Hello!'));


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/build/index.html'));
// })

const { Pool, Client, Connection } = require('pg')
// const pool = new Pool({
//     user: 'postgres',
//     host: 'db1.crrehpgr2eq9.us-east-1.rds.amazonaws.com',
//     database: 'lear',
//     password: 'learmel1',
//     port: 5432,
// })

//for db on kartic ec2
// const pool = new Pool({
//   user: 'postgres',
//   host: '127.0.0.1',
//   database: 'lear',
//   password: 'learmel1',
//   port: 5432,
// })

//for zoe local db environment
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '333444',
  port: 5432,
})

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)

//   })


const getFines = () => {
  return new Promise(function (resolve, reject) {
    pool.query('select * from fine', (error, results) => {
      if (error) {
        reject(error)
      }
      // console.log(results.rows);
      resolve(results.rows);

    })
  })
}


app.get('/fines', (req, res) => {
  getFines().then(response => {
    console.log(response);
    res.status(200).send(response);
  })
    .catch(error => {
      res.status(500).send(error);
    })
})

//for litter classification
const getLitterClassification = () => {
  return new Promise(function (resolve, reject) {
    pool.query('select * from json_classification', (error, results) => {
      if (error) {
        reject(error)
      }
      //console.log(results.rows);
      resolve(results.rows);

    })
  })
}


app.get('/litter', (req, res) => {
  getLitterClassification().then(response => {
    console.log(response);
    res.status(200).send(response);
  })
    .catch(error => {
      res.status(500).send(error);
    })
})
//

const getSyring = () => {
  return new Promise(function (resolve, reject) {
    pool.query('select * from json_syring', (error, results) => {
      if (error) {
        reject(error)
      }

      resolve(results.rows);

    })
  })
}

app.get('/syring', (req, res) => {
  getSyring().then(response => {

    res.status(200).send(response);
  })
    .catch(error => {
      res.status(500).send(error);
    })
})

//   const getTrap = () => {
//     return new Promise(function(resolve, reject) {
//       pool.query('select * from json_traps', (error, results) => {
//         if (error) {
//           reject(error)
//         }

//         resolve(results.rows);

//       })
//     }) 
//   }

// app.get('/trap', (req, res) => {
//     getTrap().then(response => {

//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     })
//   })
const getSites = () => {
  return new Promise(function (resolve, reject) {
    pool.query('select * from json_sites', (error, results) => {
      if (error) {
        reject(error)
      }
      console.log(results.rows);
      resolve(results.rows);

    })
  })
}

app.get('/sites', (req, res) => {
  getSites().then(response => {

    res.status(200).send(response);
  })
    .catch(error => {

      res.status(500).send(error);
    })
})

//for twitter feed
//'select * from json_tweet order by random() limit 15'
const getTwitters = () => {
  return new Promise(function (resolve, reject) {
    pool.query('select * from json_tweet', (error, results) => {
      if (error) {
        reject(error)
      }
      console.log(results.rows);
      resolve(results.rows);

    })
  })
}

app.get('/twitters', (req, res) => {
  getTwitters().then(response => {

    res.status(200).send(response);
  })
    .catch(error => {

      res.status(500).send(error);
    })
})

// const client = new Client({
//     user: 'my_user',
//     host: 'localhost',
//     database: 'my_database',
//     password: 'root',
//     port: 5432,
// })
// client.connect()
// var merchantList = [];
// var merchant;
// const query = {
//     text: 'SELECT * from merchants',

//     rowMode: 'array',
//   }

//for twitter api
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'dg7K11qK1SE8zAWiswFcXH8hG',
  consumer_secret: '4posDbg9dttpg0b60VUB8tKamhzwsJuY7Wgddt2vv8sKhZnmVY',
  access_token_key: '1377563808932098048-3vNNUZQUiqkbm1NzIvDYiJWOZlXtoN',
  access_token_secret: 'q2hp5pjrjrFICaRwK46fIr17lZoDBW0T1O5eCA2LGuKRD'
});

// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
//   //console.log(response)
// });
// client.get('search/tweets', {q: 'litter victoria'}, function(error, tweets, response) {
//   console.log(tweets);
// });

app.get('/api/twitters', (req, res) => {
  //getTwitters().then(response => {
  client.get('search/tweets', { q: 'litter victoria' }, function (error, tweets, response) {
    //console.log(tweets);
    if (!error) {
      res.status(200).send(tweets);
    } else {
      res.status(500).send(error);
    }
  });

  //})

})

//for fetching news api
// const axios = require('axios')

// const getNews = () => {
//   try {
//     return axios.get('https://newsapi.org/v2/everything?q=((litter)AND(melbourne))OR((volunteer)AND(clean)AND(melbourne))OR((polution)AND(melbourne))OR((litter)AND(victoria))&from=2021-04-25&sortBy=popularity&apiKey=6908e643d9a442798796f3906c8b1c1a')
//   } catch (error) {
//     console.error(error)
//   }
// }

// app.get('/api/news', (req, res) => {
//   const news = getNews().then(response => {

//         res.status(200).send(response);

//     })
//     .catch(error => {
//       console.log(error)
//     })
//   })
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('6908e643d9a442798796f3906c8b1c1a');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'business',
//   language: 'en',
//   country: 'uk'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });
// To query /v2/everything
// You must include at least one q, source, or domain
app.get('/api/news', (req, res) => {
  newsapi.v2.everything({
    //q: '(litter)AND(melbourne))OR((volunteer)AND(clean)AND(melbourne))OR((polution)AND(melbourne))OR((litter)AND(victoria)',
    q:'litter',
    sources: '',
    domains: '',
    from: '2021-04-25',
    to: '2021-05-11',
    language: 'en',
    sortBy: 'relevancy',
    page: 3
  }).then(response => {
    res.status(200).send(response);
  }).catch(error => {

    res.status(500).send(error);
  })
});


// // To query sources
// // All options are optional
// newsapi.v2.category({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Listening on port 8080'));
