const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SchoolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function(value) {
          return value.length > 1
        },
        message: 'Value must be at least 2 characters'
      }
    },
    magic: String,
    age: Number,
    students: [
      {
        type: Schema.ObjectId,
        ref: 'student'        // referencing to another collection 'Students'
      }
    ]
  }
);
  
// === GETTER / SETTER ===
SchoolSchema
  .path('name')
  .get(value => value.toUpperCase()) // will log in uppercase
  .set(value => this.name = value.toLowerCase()); // will write to DB in lowercase

// === STATICS ===
SchoolSchema.statics.findByAge = function (age) {  // statics - object with default methods
  return this.findOne({ age: age });
};  

// === METHODS ===
SchoolSchema.methods.findOlder = function () {
  return this.model('school').find({ age: {$gt: this.age }});
};

// === QUERY ===
SchoolSchema.query.byName = function (name) {    // rarely used
  return this.where({name: new RegExp(name, 'i')})
};

const model = mongoose.model('school', SchoolSchema);

module.exports = model;