var config = require('./config');
var db;
if (config.useMysqlDatabase) {
  db = require('./db-mysql');
} else {
  db = require('./db-memory');
}

var errorHandler = function(err, res) {

  console.error(err.stack);
  res.status(500);
  res.send({error: err});
};

exports.initRoutes = function(app) {

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

};