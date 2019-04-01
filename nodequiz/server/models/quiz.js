const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: String,
}, {collection: 'quizzes'});

let Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;