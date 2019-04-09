const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const answerQuestionDocument = require('./answerQuestion');

const quizResultSchema = new Schema({
    employeeId: String,
    quizId: String,
    title: String, 
    answers: [  
        answerQuestionDocument
    ]

}, { collection: 'quizResults' });

let quizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = quizResult;