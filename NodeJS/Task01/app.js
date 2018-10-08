const express = require('express');
const path = require('path');

const app = express();

const animals = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('200 OK')
});

app.listen(3000, () => console.log('Listening...'));