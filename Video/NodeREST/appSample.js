const express = require('express');
const mongoose = require('mongoose');
const Client = require('./models/Client');

mongoose.connect('mongodb://localhost/restvideo', { useNewUrlParser: true });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/clients/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const client = await Client.findById(id);
    res.status(200).json(client);
  } 
  catch (e) {
    next(e);
  }
});

app.get('/api/clients', async (req, res, next) => {
  try {
    const clients = await Client.find({});
    res.status(200).json(clients);
  }
  catch (e) {
    next(e);
  }
});

app.post('/api/clients', async (req, res, next) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  }
  catch (e) {
    next(e);
  }
});

app.put('/api/clients/:id', async (req, res, next) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).json(client);
  }
  catch (e) {
    next(e);
  }
});

app.delete('/api/clients/:id', async (req, res, next) => {
  try {
    const client = await Client.findByIdAndRemove(req.params.id);
    res.status(203).json(client);
  }
  catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  console.log(err.message)
}); 

app.listen(3000, () => console.log('Listening...'));