const express = require('express');
const mustacheExpress = require('mustache-express')
const data = require('./data')
const fs = require('fs')
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {users:data.users})
});

app.get('/:data', function (req, res) {
  res.render('profile', {users:data.users});

});


console.log(data);

app.listen(3000, function(){
  console.log('Successfully started express app');
});
