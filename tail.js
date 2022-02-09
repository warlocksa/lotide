const assertEqual = function(actual, expected) {
    let a = actual;
    let b = expected;
    if (a === b) {
      console.log(`✅✅✅Assertion Passed: ${a} === ${b}`);
      return `✅✅✅Assertion Passed: ${a} === ${b}`;
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${a} !== ${b}`);
      return `🛑🛑🛑Assertion Failed: ${a} !== ${b}`;
    }
};

function tail(Arr) {
    let newArr = Arr.shift()
    return newArr
}
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
