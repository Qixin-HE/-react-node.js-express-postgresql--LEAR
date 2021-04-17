import express from 'express';
import bodyParser, { json } from 'body-parser';
import path from 'path';
import queriesfile from './queries'
import cors from "cors";

const app = express();

//https://bezkoder.com/node-express-sequelize-postgresql/
// parse requests of content-type - application/json
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//const db = require("./app/models");
//db.sequelize.sync();
//dangerous!
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

//const queriesfile = require('./queries')
//app.get('/penalties', queriesfile.getPenalties);
// app.use(express.static(path.join(__dirname, '/build')));

app.get('/hello', (req, res) => res.send('Hello!'));
//get param from url
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
// //post route
// app.post('/hello', (req, res) => res.send(`Hello! ${req.body.name}!`));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/build/index.html'));
// })

const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '333444',
    port: 5432,
})
// pool.query('select * from fine', (err, res) => {
    
//     console.log(err, res.rows[0]);
//     //res.rows.forEach(rows => console.log(rows));
    
// })
const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('select * from fine', (error, results) => {
        if (error) {
          reject(error)
        }
        
        resolve(results.rows);
        
      })
    }) 
  }

app.get('/', (req, res) => {
    getMerchants().then(response => {
    console.log(response);
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








// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Listening on port 8080'));
