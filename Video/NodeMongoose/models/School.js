const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SchoolSchema = new Schema(
  {
    name: String,
    magic: String,
    age: Number
  }
);

const model = mongoose.model('school', SchoolSchema);

module.exports = model;