import express from 'express';
import bodyParser from 'body-parser';
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

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
//dangerous!
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

//const queriesfile = require('./queries')
app.get('/penalties', queriesfile.getPenalties);
// app.use(express.static(path.join(__dirname, '/build')));

app.get('/hello', (req, res) => res.send('Hello!'));
//get param from url
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
// //post route
// app.post('/hello', (req, res) => res.send(`Hello! ${req.body.name}!`));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/build/index.html'));
// })




//get param from url
 //app.get('/penalties', (req, res) => res.send(`Hello ${req.params.name}`));

 require("./app/routes/lear.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Listening on port 8080'));
