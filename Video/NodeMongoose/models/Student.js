const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    name: String,
    surname: String
  }
);
// === VIRTUAL ===
StudentSchema.virtual('fullname')
  .get(function () {
    return this.name + ' ' + this.surname
  })
  .set(function(value) {
    const split = value.split(' ');
    this.name = split[0];
    this.surname = split[1];
  });

const model = mongoose.model('student', StudentSchema);

module.exports = model;