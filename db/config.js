const mongoose = require('mongoose');

mongoose.connect('mongod://localhost:');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  let testSchema = new mongoose.Schema({
    name: String
  });
});

const SearchSchema = new mongoose.Schema({
  query: {
    type: String
    unique: true,
    required: true,
    trim: true
  },
  results: {
    type: JSON,
    required: true
  }
})

let NewSearch = mongoose.model('Query', SearchSchema);
module.exports = Search;
