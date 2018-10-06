const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
  console.log('Global middleware');
  next();
});

app.use('/home', (req, res, next) => {
  console.log('Home middleware');
  next();
});

app.use('/about', (req,res, next) => {
  console.log('About middleware');
  next();
});

app.get('/', 
(req, res, next) => {
  res.send('Hello!');
  next()
},

  (req, res) => {
    console.log('test next')
  }
);

app.get('/home', (req, res) => {
  //res.sendFile(__dirname + '/views/home.html');
  //res.sendFile(path.join(__dirname, 'views', 'home.html'));
  res.render('home', {
    title: '<em>Hello from server</em>',
    text: 'Lorem ipsum dolor itumin',
    products: [
      { name: 'banana', price: 150 },
      { name: 'orange', price: 200 },
      { name: 'lemon', price: 100 },
      { name: 'apple', price: 60 },
      { name: 'kiwi', price: 300 }
    ]
  })
});

app.get('/about', (req, res) => {
  res.send({ city : 'Lviv', street : 'Naukova'})
});

app.get('/form', (req, res) => {
  res.render('form');
});

// Using GET Form
app.get('/reg', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
// Using POST Form
app.post('/reg', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

app.listen(3000, () => console.log('Listening...'));