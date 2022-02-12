// const assertEqual = function(actual, expected) {
//     let a = actual;
//     let b = expected;
//     if (a === b) {
//       console.log(`✅✅✅Assertion Passed: ${a} === ${b}`);
//       return `✅✅✅Assertion Passed: ${a} === ${b}`;
//     }
//     if (a !== b) {
//       console.log(`🛑🛑🛑Assertion Failed: ${a} !== ${b}`);
//       return `🛑🛑🛑Assertion Failed: ${a} !== ${b}`;
//     }
//   };
  
const findKey = function(object,callback) {
  for (let key in object) {
    const value = object[key];
    if (callback(value)) {
      return key;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));// function(x) {if (x.stars === 2), return x}