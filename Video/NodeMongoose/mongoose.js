const mongoose = require('mongoose');
const School = require('./models/School');

mongoose.connect('mongodb://localhost:27017/mongoose2', { useNewUrlParser: true });

async function init() {
  // === Creates an object and pushes it to database ===
  // console.log(await School.create(
  //   {
  //     name: 'Hogworts',
  //     magic: 'white',
  //     age: 1000
  //   }
  // ));

  // === Creates an object but not pushes it to DB ===
  // const school = new School({
  //   name: "Gaffelpaf",
  //   magic: "black",
  //   age: 2000
  // });
  // console.log(school);
  // And here pushes it to database
  // console.log(await school.save());

  // === Show all objects in DB: ===
  console.log(await School.find());

  // === Find an object with specific criteria: ===
  // console.log(await School.findOne({ age: { $gt: 1500 }}));

  // === Update all objects that match the criteria: ===
  // await School.updateMany(
  //   { age: {$gt: 1000}},
  //   { age: 333 }
  // );
}

init();