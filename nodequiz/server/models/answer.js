const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let answerSchema = new Schema({
  answer: String,
  isCorrect: Boolean
  

})

module.exports = answerSchema;