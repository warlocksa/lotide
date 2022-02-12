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
  
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    }
  }
  return results;
};
  
assertArraysEqual(letterPositions("hello").e, [1]);