const http = require('http');

var server = http.createServer(function(req,res) {
  // url property contains the path solicited by the request
  console.log(`request made to ${req.url}`);
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  // Automatic response
  res.end('This is a server response body.')
});

server.listen(3000, '127.0.0.1');

console.log('Listening to port 3000 requests');
