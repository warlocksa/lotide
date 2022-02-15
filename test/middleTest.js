const assert = require('chai').assert;
const eqArrays = require('../eqArrays')
const assertArrayequal = require('../assertArraysEqual')
const middle = require('../middle') 

// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// // ...
describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

it("returns '[]' for [4, 5]", () => {
  assert.deepEqual(middle(['4,5']), []);
});