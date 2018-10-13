const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 0
  }
});

const model = mongoose.model('client', ClientSchema);

module.exports = model;



//console.log(Schema);