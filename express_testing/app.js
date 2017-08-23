const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({extended : false });

app.set('view engine', 'ejs');

// Express middleware
app.use('/assets', express.static('assets'));

// custom middleware
// app.use('/assets', function(req,res,next){
//   console.log(req.url);
//   next();
// });

app.get('/',function(req,res) {
  // text response
  // res.send('this is the home page');

  // html response
  // res.sendFile(__dirname + '/index.html');

  res.render('index');
});

app.get('/query_strings',function(req,res) {
  console.log(req.query);
  res.render('query_strings', {qs: req.query});
});

app.get('/contact',function(req,res) {
  // res.sendFile(__dirname + '/contact.html');
  res.render('contact');
});

app.post('/contact', urlencodedParser, function(req,res) {
  console.log(req.body);
  res.render('contact-success',{data: req.body});
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
