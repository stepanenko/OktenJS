class Car {
  constructor(make, year) {
    this.make = make;
    this.year = year;
  }
  info() {
    console.log(`Car make: ${this.make}, released in ${this.year}`);
  }
}

function Cars(make, year, volume) {
  this.make = make;
  this.year = year;
  this.volume = volume;
};
Cars.prototype = function info() {
  console.log(`Car make: ${this.make}, released in ${this.year}`);
}

const mazda = new Cars('mazda', 2019, 2);
//console.log(mazda);

module.exports = Cars;
module.exports.x = mazda;
