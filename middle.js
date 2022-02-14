const assertArraysEqual = function(a,b) {
  if (eqArrays(a,b)) {
    console.log(`✅✅✅Assertion Passed: ${a} === ${b}`);
    return `✅✅✅Assertion Passed: ${a} === ${b}`;
  }
  if (!eqArrays(a,b)) {
    console.log(`🛑🛑🛑Assertion Failed: ${a} !== ${b}`);
    return `🛑🛑🛑Assertion Failed: ${a} !== ${b}`;
  }
};
  
const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};

  
// ACTUAL FUNCTION
const middle = function(array) {
  //...
  let num = [];
  if (array.length <= 2) {
    return num = [];
  }
  if (array.length % 2 !== 0) {
    const a = (array.length - 1) / 2;
    return num = [array[a]];
  }
  if (array.length % 2 === 0) {
    const x = array.length / 2 - 1;
    const y = array.length / 2;
    return num = [array[x],array[y]];
  }
  return num;
};
  
module.exports = middle