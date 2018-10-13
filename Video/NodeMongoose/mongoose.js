const mongoose = require('mongoose');
const School = require('./models/School');
const Student = require('./models/Student');

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
  // console.log(await Student.find());

  // === Find an object with specific criteria: ===
  // console.log(await School.findOne({ age: { $gt: 1500 }}));
  
  // === Update all objects that match the criteria: ===
  // await School.updateMany(
    //   { age: {$gt: 1000}},
    //   { age: 333 }
    // );
    
  // === Find an object by ID: ===
  //  let school = await School.findById('5bc0d34c7a12331e0022bc28');

  // === Update object (document): ===
  // school.age = 1212;
  // await school.save();
  
  // === Delete document by ID: ===
  // await School.findByIdAndDelete('5bc0d34c7a12331e0022bc28');

  // === Delete All: ===
  // await School.deleteMany();

  // === Using custom methods: ===
  // const school = await School.findByAge(111);
  // console.log(await school.findOlder());

  // === Another way to write DB queries: ===
  // console.log(await School
  //   .find()
  //   .where('age')
  //   .gte(100)
  //   .skip(1)
  //   .limit(2)
  //   .exec());

  // console.log(await School
  //   .find()
  //   .byName('super') // using custom 'query' 
  //   .exec());

  // await Student.create({
  //   name: 'Jack',
  //   surname: 'Daniels'
  // });

  let student = await Student.findById('5bc1b3cea423401958883390');
  // Using GETTER:
  console.log(student.fullname);
  // Using SETTER:
  student.fullname = 'Jackie Chan';
  console.log(student.name);
  console.log(student.surname);
}

init();