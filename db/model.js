const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
  query: {
    type: String
    unique: true,
    required: true,
    trim: true
  },
  results: {
    type: String,
    required: true
  }
})

const NewQuery = mongoose.model('NewQuery', QuerySchema);

NewQuery.create(query, (err, query) => {})

NewQuery.findOne({ query: }, (err, result) => {});

module.exports = NewQuery;
