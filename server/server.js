const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//CORS Headers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,\
    Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
});

app.listen(port, function() {
  console.log(`server running on port ${port}`);
});

app.get('/', (req, res) => {
  console.log('Got here')
  res.render('index')
})

app.post('/', (req, res) => {
  //build out post method
})
