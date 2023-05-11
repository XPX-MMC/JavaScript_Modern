//
// File: main.js
// Date: 5/24/2022
//

const countNumbers = (array) => {
  let numberCounter = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") numberCounter++;
  }

  return numberCounter;
};

//counter 3
// [1, '2', 3, 'test', 1.2]
//                      i

// console.log(testCaseArray1.length)
const ex1 = () => {
  const testCaseArray1 = [1, "2", 3, "test", 1.2];

  console.log(countNumbers(testCaseArray1));
};

const minNumber = (array) => {
  let minCounter = 0;

  for (let i = 0; i < array.length; i++) {
    if (i == 0) minCounter = array[0];
    else if (minCounter > array[i]) minCounter = array[i];
  }

  return minCounter;
};

const ex2 = () => {
  const array = [12, 55, 2, 22, 11];
  console.log(minNumber(array));
};

const ex3 = () => {
  const interleave = (array1, array2) => {
    let interArray = [];

    //   Comparing the length of both lists (arrays)
    if (array1.length != array2.length) {
      // Creating a message if the arrays do not match
      console.log("ERROR: Array length mismatch");
    } else {
      //    We are pushing the elements into the blank array. Creating a loop with the [i] for every number.
      for (let i = 0; i < array1.length; i++) {
        interArray.push(array1[i], array2[i]);
      }
      console.log(interArray.join(""));
    }
  };

  // Test Case #1
  const array1 = [1, 2, 3, 4, 5];
    const array2 = ["a", "b", "c", "d", "e"];

  //test case #2
//   const array1 = [1, 2];
//   const array2 = ["a", "b", "c", "d", "e"];

  interleave(array1, array2);
};

const main = async () => {
  ex1();
  ex2();
  ex3();
};

main();
