const express = require('express')
const bodyParser = require('body-parser')


const ac = require('./controllers/serverData.js');

const app = express();

app.use(bodyParser.json());

// app.get(`https://anapioficeandfire.com/api/characters`, ac.receive);
app.get(`http://pokeapi.co/api/v2/pokemon/1`, ac.receive);

const port = 3004;
app.listen(port, () => console.log(`Port: ${port} is ready and waiting.`))