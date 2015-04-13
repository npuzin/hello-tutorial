var express = require('express');
var app = express();
var mysql = require('mysql');
var port = 8080;

process.on('uncaughtException', function (exception) {
  console.log(exception.stack);
});

var getConnection = function() {

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'pass-1234'
  });

  connection.connect();
  return connection;
};

app.get('/rest/hello', function (req, res) {
  
  console.log('GET /rest/hello');
  var connection = getConnection();
  connection.query('SELECT * from nico.hello order by sent desc', function(err, rows, fields) {
    if (err) {
      throw err;
    }

    res.send(rows);
  });

  connection.end();
});

app.listen(port, function () {

  console.log('Back-end server listening on port %s', port);
});