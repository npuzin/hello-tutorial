var express = require('express');
var app = express();
var port = 8084;
var db = require('./db.js');

var errorHandler = function(err, res) {

  console.error(err.stack);
  res.status(500);
  res.send({error: err});
};

app.get('/rest/hello', function (req, res) {
  
  console.log('GET /rest/hello');
  db.getPeople(function(err, rows) {
    if (err) {      
      errorHandler(err,res);
    } else {
      res.send(rows);
    }    
  });
    
});

app.listen(port, function () {

  console.log('Back-end server listening on port %s', port);
});