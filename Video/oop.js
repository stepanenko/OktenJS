
let x = {
  name: 'Vasya',
  greeting: function () {
    return 'Hello Im ' + this.name;
  }
};
x.age = 50;
// console.log(x.greeting());
// console.log(x)

class User {
  constructor(name, age) {
    this.name = name;
    this['age'] = age;
  }

  greeting(message) {
    return `hello my name is ${this.name} ${message}`;
  }
}

// new User();
// new User();
// new User();
let user1 = new User('Petya', 50);
user1.status = true;
// console.log(user1)

class Student extends User {
  constructor(name, age, group) {
    super(name, age);
    this.group = group;
    super.greeting();
  }
}
const stud = new Student('George', 29, 'm101');
// console.log(stud);
// console.log(stud.greeting());

const user2 = {
  name: 'Jack',
  age: 34
}

// console.log(user2);
// console.log(user1);

// now we want user2 to use user1's greeting()

// ===== CALL, APPLY and BIND ====
// console.log(user1.greeting.call(user2, 'Canfield'));
// console.log(user1.greeting.apply(user2, ['Foolisher']));
const bin = user1.greeting.bind(user2, 'Gefferson');
//console.log(bin());


// from https://learn.javascript.ru/call-apply

let person = {
  firstName: "Igor",
  surName: "Petrov",
  middle: 'Andreevich'
};

function getFullName(a, b) {
  console.log(`That is ${this[a]} ${this[b]}`);
}

// getFullName.call(person, 'firstName', 'surName');
// getFullName.call(person, 'firstName', 'middle');

// ==== Old School Method (before ES6) ====

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    console.log(`Hello I am ${this.name}`);
  }
}

let pers = new Person('Frank', 28);
// pers.greeting();

function Boy(name, age, hobbie) {
  Person.apply(this, arguments);
  this.hobbie = hobbie;
}

let jimmy = new Boy('Jim', 8, 'football');
// console.log(jimmy);

// ==== Object.create() =====
let girl = {
  name: 'Kylie',
  age: 44
}
let girl2 = Object.create(girl);
girl2['name'] = 'Sandy';
// console.log(girl2);
// console.log(girl2.age);
// console.log(girl2.hasOwnProperty('age'));

for (let key in girl2) {
  // console.log(key, girl2[key], girl2.hasOwnProperty(key));
}

// console.log(girl2.__proto__);   // { name: "Kylie", age: 44 }


// ==== PROTOTYPE ======
const number = [1, 2, 3, 4, 5, 6];
const numbers = new Array(1, 2, 3, 4, 5, 6);   // the same as above

Array.prototype.print = function () {
  console.log(this);
}

numbers.print();

Date.prototype.what = function () {
  console.log(new Date());
}
let ti = new Date();
ti.what();    //  Fri Sep 14 2018 16:17:34
