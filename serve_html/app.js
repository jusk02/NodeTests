const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res) {
  // url property contains the path solicited by the request
  console.log(`request made to ${req.url}`);
  res.writeHead(200, {'Content-Type' : 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

  // takes read stream and writes it in the response
  myReadStream.pipe(res);

});

server.listen(3000, '127.0.0.1');

console.log('Listening to port 3000 requests');
