const express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res) {
  // text response
  // res.send('this is the home page');

  // html response
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact',function(req,res) {
  // res.sendFile(__dirname + '/contact.html');
  res.render('contact');
});

// route variables or params
app.get('/profile/:name', function(req,res) {
  // text response
  // res.send('you requested to se profile '+ req.params.id)
  var dummy_data = { age:29, job: 'ninja',hobbies: ['eating','fishing','cars']};
  // response with EJS
  res.render('profile',{ person: req.params.name, data: dummy_data });
});

app.listen(3000);
