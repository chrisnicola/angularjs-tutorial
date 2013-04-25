var static = require('node-static');
var file = new(static.Server)('./');
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
http.createServer(function (request, response) {
  file.serve(request, response);
}).listen(8000);

console.log('Server running at http://localhost:8000/')
