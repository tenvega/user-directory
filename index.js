const express = require('express');
const mustacheExpress = require('mustache-express')
const data = require('./data')
const fs = require('fs')
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));

app.get('/', function(req, res) {
  for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].job === null) {
      data.users[i].job = "Available for hire";
    }
  }
  res.render('home', {
    users: data.users
  })
});

app.get('/:profile', function(req, res) {
  let robot = req.params.profile;
  for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].username === robot) {
      res.render('profile', {
        users: data.users[i]
      });
    }
  }
});

console.log(data);

app.listen(3000, function() {
  console.log('Successfully started express app');
});
