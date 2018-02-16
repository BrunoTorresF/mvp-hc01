const mongoose = require('mongoose');

const BeerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    //required: true,
    trim: true
  }
})

let Beers = mongoose.model('Beers', BeerSchema);

module.exports = Beers;
//NewQuery.create(query}, (err, query) => {
//  if (err) console.log(err);
//})

//NewQuery.find({ 'query': query }, (err, result) => {
//  if (err) console.log(err);
//});
