var fs = require('fs');

// delete files like fs.unlink('writeMe.txt');


// create directory - Blocking code
// fs.mkdirSync('stuff');

// remove directory - Blocking code
// fs.rmdirSync('stuff');

// create directory - non-locking code
fs.mkdir('stuff',function() {
  fs.readFile('readMe.txt', 'utf8', function(err, data) {
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});

// remove directory - non-locking code
// cant remove non-empty directories
// fs.rmdir('stuff');


// to remove content and after that remove folder.
fs.unlink('./stuff/writeMe.txt',function() {
  fs.rmdir('stuff');
})
