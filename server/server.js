var express = require('express');
var bodyParser = require('body-parser');
var database = require('../db/config.js');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));

//handle get requests to groceries
app.get('/beers', function(req, res){
  database.selectAll((err, results) => {
    if(err) {
      console.log('errrrrrrr hitting the database');
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  })
})

//handle post requests to groceries
app.post('/beers', function(req, res){
  //update data object with new object from my req.body
  let style    = req.body.style;
  let description = req.body.description;
  //send the updated data object back

  if(!description) {
    res.sendStatus(400);
  } else {
    database.insertOne(description, style, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results);
      }
    });
  }

});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});


/*const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const Beers = require('../db/model.js');
const db = require('../db/config.js');

const dbConnect = mongoose.connect('mongodb://localhost:27017/beerlist', ['beers']);
console.log(dbConnect)
const app = express();
const router = express.Router();
const port = 3000;
//const routes = require('./routes.js')

app.use(cors());
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//app.options('baseUrl', cors())
//app.use('/*', routes);

app.listen(port, function() {
  console.log(`server running on port ${port}`);
});

app.get('/save', (req, res, next) => {
  dbConnect.beers.find((err, beers) => {
    if (err) res.sendStatus(500);
    res.json(beers)
  });
})

app.post('/save', (req, res, next) => {
  let beer = req.body;
  console.log(beer)
  dbConnect.beers.save(beer, (err, beer) => {
    if (err) {
      res.send(err)
    }
    res.json({message: 'Beer Successfully Saved'});
  });
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
