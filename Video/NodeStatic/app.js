const express = require('express');
const path = require('path');
const User = require('./models/User');
const session = require('express-session');

const app = express();

const users = [];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'sdfgjks34dnfoerjenl45',
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => {
  res.render('index', {
    users,
    principal: req.session.principal ? req.session.principal : null
  });
});

app.post('/register', (req, res) => {
  let user = new User(req.body.login, req.body.password);
  // user.login = req.body.login;
  // user.password = req.body.password;
  users.push(user);
  res.redirect('/');
});

app.post('/login', (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  let principalIndex = users.findIndex(value => {
    return value.login === login && value.password === password
  });
  console.log(users[principalIndex]);

  if (principalIndex > -1) {
    req.session.principal = users[principalIndex];
  }

  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.session.principal = null;
  res.redirect('/');
});

app.get('/user/:login', (req, res) => {
  //console.log(req.params);
  let principalIndex = users.findIndex(value => req.params.login === value.login);
  res.send(users[principalIndex]);
});

app.listen(3000, () => console.log('Listening...'));