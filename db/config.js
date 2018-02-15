const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/beerlist', ['beers']);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function(){
  console.log('Mongodb connection open');
});

module.exports = db;
