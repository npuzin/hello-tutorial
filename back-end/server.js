var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8084;
var routing = require('./routing');
var config = require('./config.json');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routing.initRoutes(app);

if (config.debug) {
  app.use(express.static(__dirname + './../front-end/app'));
  console.log('Front-end server listening on port %s', port);
}

app.listen(port, function () {

  console.log('Back-end server listening on port %s', port);
});