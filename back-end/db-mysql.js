var Q = require('q');
var mysql = require('mysql');

var getConnection = function() {

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'pass-1234'
  });

  connection.connect();
  return connection;
};

exports.getPeople = function(resultCallback) {
  var dfr = Q.defer();
  var connection = getConnection();
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

exports.insertPerson = function(person, resultCallback) {
  var dfr = Q.defer();
  var connection = getConnection();
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