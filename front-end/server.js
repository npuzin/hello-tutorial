var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var port = 9001;
var backendServerUrl = 'http://localhost:8080';
var backendRedirectUrl = '/rest/*';

process.on('uncaughtException', function (exception) {
  console.log(exception.stack);
});

app.get(backendRedirectUrl, function(req, res){ 
  apiProxy.web(req, res, { 
    target: backendServerUrl 
  });
});

app.use(express.static(__dirname + '/app'));

app.listen(port, function () {  
  console.log('Font-end server listening on port %s', port);
  console.log('Proxy set up: %s -> %s', backendRedirectUrl, backendServerUrl);
});
