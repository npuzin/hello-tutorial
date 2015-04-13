var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var port = 9001;
var backendServerUrl = 'http://localhost:8084';
var backendRedirectUrl = '/rest/*';

app.get(backendRedirectUrl, function(req, res){ 
  proxy.web(req, res, { 
    target: backendServerUrl 
  });
});

proxy.on('error', function(error) {
  console.error('A proxy error happened');
  console.error(error.stack);
});

app.use(express.static(__dirname + '/app'));

app.listen(port, function () {  
  console.log('Font-end server listening on port %s', port);
  console.log('Proxy set up: %s -> %s', backendRedirectUrl, backendServerUrl);
});
