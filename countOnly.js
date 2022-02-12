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
  
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   const newObj = {};
//   for ( let i = 0; i < allItems.length; i++) {
//     if( itemsToCount["i"] = true) {
//       newObj["i"] += 1
//     }
//   }
//   return newObj
// }
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      }
      if (!results[item]) {
        results[item] = 1;
      }
    }
  }
  return results;
};
  
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
    
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
