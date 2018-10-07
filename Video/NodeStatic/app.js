const express = require('express');
const path = require('path');

const app = express();

const users = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/register', (req, res) => {
  let user = {};
  user.name = req.body.name;
  user.password = req.body.password;
  users.push(user);
  res.send(user);
})

app.listen(3000, () => console.log('Listening...'));