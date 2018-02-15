const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const router = express.Router();

const config = require('../config/config.js');
const baseUrl = "http://api.brewerydb.com/v2/";

app.get('/search', (req, res, next) => {
  axios({
    method: 'get',
    url: `${baseUrl}search?q=${client.query}&type=beer&key=${config.HopOns}`, {
    }
  })
})
.then(res => {
  console.log(res.body);
})
.catch(err => {
  console.error(err);
});

app.get('/save', (req, res, next) => {
  console.log('got index')
  res.send('Initial')
})

app.post('/saved', (req, res, next) => {
  //build out post method
  console.log('content-type')
  console.log(req.body)
  res.send(req.body)
})

module.exports = Controllers;
