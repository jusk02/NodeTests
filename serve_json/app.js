const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res) {
  // url property contains the path solicited by the request
  console.log(`request made to ${req.url}`);
  res.writeHead(200, {'Content-Type' : 'application/json'});

  var myObj ={
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  }

  // send data to de client, expects a string or buffer
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');

console.log('Listening to port 3000 requests');
