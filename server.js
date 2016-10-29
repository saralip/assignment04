var express = require('express'),
    http = require('http'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/assignment04');

http.createServer(app).listen(3000);
console.log("Server listening on port 3000");
console.log("Go to http://localhost:3000/");

// Creating Model for questions
var QuestionSchema = mongoose.Schema({
  'question': String,
  'answer': String
  'questionId': Number,
});

var Question = mongoose.model('Question', QuestionSchema);*/

/*var q1 = new Question({
  'questionId': 1,
  'question': 'Who was the first computer?',
  'answer': 'Ada Lovelace'
});

var q2 = new Question({
  'questionId': 1,
  'question': 'Who led software development for NASA\'s Apollo lunar mission?',
  'answer': 'Ada Lovelace'
});

q1.save(function (err) {
  if(err !== null) {
    console.log(err);
  }
  else {
    console.log('');
  }
});

Question.find({questionId: 1}).exec(function(e, question) {
  if (e) {
    console.log(e);
  }
  else {
    console.log(question.question);
  }
});*/


// TESTING GET and POST METHODS - good to go
var q1 = {
  "questionId": 1,
  "question": 'Who was the first computer scientist?',
  "answer": 'Ada Lovelace'
};
q1 = JSON.stringify(q1);
console.log(typeof(q1));

app.get('/question', function(req, res) {
  console.log("hello server stuff");
  res.send(q1);
});

app.post('/question', function(req, res) {

  var data = req.body.data;
  console.log(typeof(data));

  data = JSON.parse(data);
  console.log(typeof(data));

  res.send("processing");
});
