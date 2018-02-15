const mongoose = require('mongoose');

mongoose.connect('mongod://localhost/test');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  let testSchema = mongoose.Schema({
    name: String
  });
});
