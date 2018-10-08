const express = require('express');
const path = require('path');
const Animal = require('./Models/Animal')

const app = express();

const animals = [];

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    animals
  })
});

app.post('/create-animal', (req, res) => {
  let id = animals.length + 1;
  let name = req.body.name;
  const animal = new Animal(id, name);
  animals.push(animal);
  res.redirect('/');
});

app.get('/animals', (req, res) => {
  res.send(animals);
});

app.get('/animals/:id', (req, res) => {
  const index = animals.findIndex(value => value.id == req.params.id);
  const animal = animals[index];
  res.send(animal);
});

app.listen(3000, () => console.log('Listening...'));