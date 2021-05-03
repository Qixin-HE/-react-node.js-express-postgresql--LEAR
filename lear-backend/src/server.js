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
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
      pool.query('select * from json_classification', (error, results) => {
        if (error) {
          reject(error)
        }
         //console.log(results.rows);
        resolve(results.rows);
        
      })
    }) 
  }


app.get('/litterclassification', (req, res) => {
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
    return new Promise(function(resolve, reject) {
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

  const getTrap = () => {
    return new Promise(function(resolve, reject) {
      pool.query('select * from json_traps', (error, results) => {
        if (error) {
          reject(error)
        }
        
        resolve(results.rows);
        
      })
    }) 
  }

app.get('/trap', (req, res) => {
    getTrap().then(response => {
    
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







app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Listening on port 8080'));
