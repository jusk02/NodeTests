const http = require('http');
const fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// var mywriteStream = fs.createWriteStream(__dirname + '/writeme.txt');
//
// // same as read write streams seen before, now shorter
// myReadStream.pipe(mywriteStream);


var server = http.createServer(function(req,res) {
  // url property contains the path solicited by the request
  console.log(`request made to ${req.url}`);
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

  // takes read stream and writes it in the response
  myReadStream.pipe(res);

});

server.listen(3000, '127.0.0.1');

console.log('Listening to port 3000 requests');
