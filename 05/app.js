var fs = require('fs');

// Blocking code, wont move on until done.
var readMe = fs.readFileSync('readme.txt', 'utf8');
console.log(readMe + ' Sync');

fs.writeFileSync('writeMe.txt', readMe);


// Async code, non-bloking code allows multiple tasks to run.
fs.readFile('readme.txt', 'utf8',function(err, data) {
  console.log(data + ' Async');
  fs.writeFile('writeMeAsync.txt', data);
});
