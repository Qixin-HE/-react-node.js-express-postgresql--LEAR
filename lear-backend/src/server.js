import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import queriesfile from './queries'

const app = express();

app.use(bodyParser.json());



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



// db.one('SELECT  AS value', 123)
//   .then(function (data) {
//     console.log('DATA:', data.value)
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   })





//get param from url
 //app.get('/penalties', (req, res) => res.send(`Hello ${req.params.name}`));


app.listen(8000, () => console.log('Listening on port 8000'));
