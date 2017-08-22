const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res) {

  console.log(`request made to ${req.url}`);

  if (req.url === '/home' || req.url === '/' ) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }else if (req.url === '/api/list') {
    var ninjas = [{ name:'ryu', age:33 },{ name:'ana', age:22} ];
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  }else {
    res.writeHead(404,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }


});

server.listen(3000, '127.0.0.1');

console.log('Listening to port 3000 requests');
