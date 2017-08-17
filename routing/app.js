const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res) {

  console.log(`request made to ${req.url}`);

  if (req.url === '/home' || req.url === '/' ) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }else {
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }


});

server.listen(3000, '127.0.0.1');

console.log('Listening to port 3000 requests');
