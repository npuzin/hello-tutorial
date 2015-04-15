var Q = require('q');
var mysql = require('mysql');
var config = require('./config');

exports.getPeople = function() {
  var dfr = Q.defer();
  var connection = mysql.createConnection(config.mysql);
  connection.connect();
  connection.query('SELECT * from hello.person order by sent', function(error, rows) {
    if (error) {
      dfr.reject(error);
    } else {
      dfr.resolve(rows);
    }
  });
  connection.end();
  return dfr.promise;
}

exports.insertPerson = function(person) {
  var dfr = Q.defer();
  var connection = mysql.createConnection(config.mysql);
  connection.connect();
  connection.query('INSERT INTO hello.person SET ?',person, function (error, rows) {
    if (error) {
      dfr.reject(error);
    } else {
      dfr.resolve(rows);
    }
  });
  connection.end();
  return dfr.promise;
}