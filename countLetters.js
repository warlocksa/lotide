const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (a === b) {
    console.log(`✅✅✅Assertion Passed: ${a} === ${b}`);
    return `✅✅✅Assertion Passed: ${a} === ${b}`;
  }
  if (a !== b) {
    console.log(`🛑🛑🛑Assertion Failed: ${a} !== ${b}`);
    return `🛑🛑🛑Assertion Failed: ${a} !== ${b}`;
  }
};
  
const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (result[letter]) {
      result[letter] += 1;
    }
    if (!result[letter]) {
      result[letter] = 1;
    }
  }
  return result;
};

// console.log(countLetters("I am sleepy"));
module.exports = countLetters;