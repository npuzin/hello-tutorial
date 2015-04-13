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
  var connection = getConnection();
  connection.query('SELECT * from hello.person order by sent', resultCallback);
  connection.end();
}

exports.insertPerson = function(person, resultCallback) {
  var connection = getConnection();
  connection.query('INSERT INTO hello.person SET ?',person, resultCallback);
  connection.end();
}