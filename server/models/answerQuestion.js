const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let answerQuestionSchema = new Schema({
  question: String,
  selectedAnswer: String,
  acuatlAnswer: String,
})

module.exports = answerQuestionSchema;