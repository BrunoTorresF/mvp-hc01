var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "password",
  database: "beerList"
});

var selectAll = function(cb) {
  con.query('SELECT * FROM beers', (err, results, fields)=> {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

var insertOne = function(beer, style, cb) {
  con.query('INSERT INTO beers (beer, style) VALUES (?, ?)',
    [beer, style], (err, results, fields) => {
      if(err) {
        cb(err, null);
      } else {
        console.log(results);
        cb(null, results);
      }
    });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;


/*const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/beerlist', ['beers']);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function(){
  console.log('Mongodb connection open');
});

module.exports = db;
*/
