import express from 'express';
import bodyParser, { json } from 'body-parser';
import path from 'path';
//import queriesfile from './queries'
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

//it requires the dotenv package and executes its config function, which reads the .env file and sets the environment variables.
const { newApiKey, twitterConsumerKey, twitterConsumerSecret, twitterAccessTokenKey, twitterTokenSecret, user, host, database, password, port } = require('./config');
//console.log({ newApiKey });
//for zoe local db environment
const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: port,
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
      
      resolve(results.rows);

    })
  })
}


app.get('/litter', (req, res) => {
  getLitterClassification().then(response => {
    //console.log(response);
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

//For responding the syring bin data fetch request (get).
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
      //console.log(results.rows);
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
  
  consumer_key: twitterConsumerKey,
  consumer_secret: twitterConsumerSecret,
  access_token_key: twitterAccessTokenKey,
  access_token_secret: twitterTokenSecret
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
const newsapi = new NewsAPI(newApiKey);

//Get two time strings for querying live news everyday
const findToday = () => {
var dateObj = new Date();
var month = dateObj. getUTCMonth() + 1; //months from 1-12.
var lastMonth = month - 1;
var day = dateObj. getUTCDate();
var year = dateObj. getUTCFullYear();
const toDate = year + "-" + month + "-" + day;
const fromDate = year + "-" + lastMonth + "-" + day;
const queryTime = {
  "from" : fromDate,
   "to": toDate
}
//console.log(queryTime);
return queryTime;
}

// To query /v2/everything
// You must include at least one q, source, or domain
app.get('/api/news', (req, res) => {
  const queryTime = findToday;
  newsapi.v2.everything({
    //q: '(litter)AND(melbourne))OR((volunteer)AND(clean)AND(melbourne))OR((polution)AND(melbourne))OR((litter)AND(victoria)',
    q:'((litter)AND(victoria))OR((litter)AND(melbourne))OR((volunteer)AND(clean)AND(victoria))OR((volunteer)AND(clean)AND(melbourne))OR((polution)AND(victoria))OR((polution)AND(melbourne))OR((polution)AND(victoria))OR((litter)AND(australia))',
    
    sources: '',
    domains: '',
    from: queryTime.from,
    to: queryTime.to,
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
