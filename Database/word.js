const mongoose = require('mongoose');
require('./index.js');

mongoose.Promise = global.Promise;

const wordSchema = new mongoose.Schema({
  word:String
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;