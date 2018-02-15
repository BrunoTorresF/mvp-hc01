const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const router = express.Router();
const port = 3000;

app.use(cors());
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.options('baseUrl', cors())

app.listen(port, function() {
  console.log(`server running on port ${port}`);
});

//CORS Headers
/*app.options('search', (req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Credentials', 'true');
res.header('Content-Type', 'text/plain')
res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,\
Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
res.header('Cache-Control', 'no-cache');
next();
});*/
