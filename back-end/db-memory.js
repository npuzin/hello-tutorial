var Q = require('q');
var people = [];

exports.getPeople = function() {  
  var dfr = Q.defer();
  dfr.resolve(people);  
  return dfr.promise;
};

exports.insertPerson = function(person) {
  person.sent = Date.now();
  people.push(person);
  var dfr = Q.defer();
  dfr.resolve(person);  
  return dfr.promise;
};