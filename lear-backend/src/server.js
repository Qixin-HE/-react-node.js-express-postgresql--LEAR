import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/build')));

app.get('/hello', (req, res) => res.send('Hello!'));
//get param from url
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
//post route
app.post('/hello', (req, res) => res.send(`Hello! ${req.body.name}!`));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})
app.listen(8000, () => console.log('Listening on port 8000'));
