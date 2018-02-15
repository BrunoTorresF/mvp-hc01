const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors')

const router = express.Router();

const API_KEY = require('../config/config.js')
const baseUrl = "http://api.brewerydb.com/v2/";

app.get('/search', )
axios.get(
  `${baseUrl}search?q=${query}&type=beer&key=${API_KEY}`
)
.then(res => {
  console.log(res.body);
})
.catch(err => {
  console.error(err);
});

app.get('/save', (req, res, next) => {
  console.log('got index')
  res.json({ message: 'Initial'})
})

app.post('/saved', (req, res, next) => {
  //build out post method
  console.log('content-type')
  console.log(req.body)
  res.send(req.body)
})
