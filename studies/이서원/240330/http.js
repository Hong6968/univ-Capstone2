var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});

   response.end('Hello World\n');
}).listen(80);

console.log('Server running at http://210.125.31.240:80/')
