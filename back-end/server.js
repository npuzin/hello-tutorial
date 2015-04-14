var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8084;
var db = require('./db-mysql.js');
//var db = require('./db-memory.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var errorHandler = function(err, res) {

  console.error(err.stack);
  res.status(500);
  res.send({error: err});
};

app.all('*', function (req, res, next) {
  console.log('%s %s',req.method, req.url);
  next();
});

app.post('/rest/person', function (req, res) {
    
  var person = req.body;

  db.insertPerson(person).then(function(){
    res.send();
  }, function (error) {
    errorHandler(error,res);
  });   
});

app.get('/rest/person/all', function (req, res) {
    
  db.getPeople().then(function(people){
    res.send(people);
  }, function (error) {
    errorHandler(error,res);
  });        
});

app.listen(port, function () {

  console.log('Back-end server listening on port %s', port);
});