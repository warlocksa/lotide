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

const takeUntil = function(array, callback) {
  // ...
  let i = 0;
  array.forEach((element,index) => {
    if (callback(element)) {
      i = index;
    }
  });
  return array.slice(0,i);
};

// const datas = [1,3,4,5,67,8,435,3];
// assertArraysEqual([1, 3, 4,5,67], takeUntil(datas, x=> x === 8));

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);//function(x) {if (x<0)return x}
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
module.exports = takeUntil;