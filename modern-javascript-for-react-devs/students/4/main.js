//
// File: main.js
// Date: 5/24/2022
//

// ex1
const countNumbers = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result += 1;
    }
  }
  return result;
};

//test cases
const array = [1, "2", 3, "test", 1.2];
const array2 = [3, {}, 2, "string"];
const array3 = [];
console.log(countNumbers(array), countNumbers(array2), countNumbers(array3));

//ex2
const minNumber = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
//test cases
console.log(minNumber([3, 5, 1, 2]));
console.log(minNumber([10, 5, 3, 0]));
console.log(minNumber([3, -29, 1, -100]));

const interleave = (arr1, arr2) => {
  let result = [];
  if (arr1.length !== arr2.length) {
    return "ERROR: Array length mismatch";
  } else {
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i]);
      result.push(arr2[i]);
    }
  }
  return result;
};

console.log(interleave([1, 2, 3], [1, 2, 3]));

//
// Your functions here...
//

const countNumberss = (array) => {
  let retval = 0;
  // TODO...
  return retval;
};

const main = async () => {};

main();
