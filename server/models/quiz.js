const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionDocument = require('./question')

const quizSchema = new Schema({
    title: String,
    questions: [
        questionDocument
    ]
}, {collection: 'quizzes'});

let Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;