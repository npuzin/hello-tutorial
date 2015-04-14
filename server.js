var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 9001;
var routing = require('./rest/routing.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
  console.log('%s %s',req.method, req.url);
  next();
});

routing.initRoutes(app);

app.use(express.static(__dirname + '/static'));

app.listen(port, function () {

  console.log('Server listening on port %s', port);
});