// Create web server
// 1. Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = require('./comments');
var port = 8080;

// 2. Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), uri);

    if (request.method === 'POST' && uri === '/comment') {
        request.on('data', function (data) {
            var comment = data.toString();
            comments.add(comment); // Fix: Added closing parenthesis ')' here
        });
    }
});
