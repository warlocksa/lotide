// const assertEqual = function(actual, expected) {
//   let a = actual;
//   let b = expected;
//   if (a === b) {
//     console.log(`✅✅✅Assertion Passed: ${a} === ${b}`);
//     return `✅✅✅Assertion Passed: ${a} === ${b}`;
//   }
//   if (a !== b) {
//     console.log(`🛑🛑🛑Assertion Failed: ${a} !== ${b}`);
//     return `🛑🛑🛑Assertion Failed: ${a} !== ${b}`;
//   }
// };
const assertEqual = require('./assertEqual');

const head = function(arr) {
  return arr[0];
}

module.exports = head;