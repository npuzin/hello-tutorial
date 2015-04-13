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

exports.getPeople = function(callback) {
  var connection = getConnection();
  connection.query('SELECT * from nico.hello order by sent desc', callback);
  connection.end();
}
