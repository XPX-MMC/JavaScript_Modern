//
// File: main.js
// Date: 5/24/2022
//

// ex1
const countNumbers = (arr) => arr.length;

//test cases
const array = [1, "2", 3, "test", 1.2];
const array2 = [];
const array3 = ["0"];
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

const ex3 = () => {
  // TODO...
};

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
