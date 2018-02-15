const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const router = express.Router();
const port = 3000;
const search = "http://www.thebeerspot.com/api/search";

app.use(cors());
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.options('search', cors())
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
//text/html,application/xhtml+xml,application/xml;q=0.9

app.listen(port, function() {
  console.log(`server running on port ${port}`);
});

app.get('/', (req, res, next) => {
  console.log('got index')
  res.json({ message: 'Initial'})
})

app.post('search', (req, res, next) => {
  //build out post method
  console.log('content-type')
  console.log(req.body)
  res.send(req.body)
})
