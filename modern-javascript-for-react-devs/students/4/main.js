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

// ex1 test cases
const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  const array2 = [3, {}, 2, "string"];
  const array3 = [];
  console.log(countNumbers(array));
  console.log(countNumbers(array2));
  console.log(countNumbers(array3));
};

// ex2
const minNumber = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

// ex2 test cases
const ex2 = () => {
  console.log(minNumber([3, 5, 1, 2]));
  console.log(minNumber([10, 5, 3, 0]));
  console.log(minNumber([3, -29, 1, -100]));
};

// ex3
const interleave = (arr1, arr2) => {
  let result = "";
  if (arr1.length !== arr2.length) {
    return "ERROR: Array length mismatch";
  } else {
    for (let i = 0; i < arr1.length; i++) {
      result += arr1[i];
      result += arr2[i];
    }
  }
  return result;
};

// ex3 test cases
const ex3 = () => {
  console.log(interleave([1, 2, 3], [1, 2, 3]));
  console.log(interleave([4, 2, 1], ["J", "I", "K"]));
  console.log(interleave([21], [32, 1, 2]));
};

// ex4
const palindrome = (str) => {
  for (let i = 0; i < Math.floor(str.length); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const ex4 = () => {
  console.log(palindrome("radar"));
  console.log(palindrome("month"));
  console.log(palindrome("racecar"));
};
ex4();

const main = async () => {};

main();
