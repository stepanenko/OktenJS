
class Util {

  pretty(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    return 'great job';
  }
}

const arru = new Util;

//console.log(arru)
console.log(arru.pretty([1,2,3,4]));   // will also log 'great job' at the end

module.exports = arru;
