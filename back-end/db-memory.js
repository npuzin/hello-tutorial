var people = [];

exports.getPeople = function(resultCallback) {  
  resultCallback(null, people);  
}

exports.insertPerson = function(person, resultCallback) {
  person.sent = Date.now();
  people.push(person);
  resultCallback(null, person);
}