//
// File: main.js
// Date: 5/24/2022
// 


const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    // TODO...
}

const ex3 = () => {
    // TODO...
}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    // TODO...
    return retval;
}

const main = async () => {
    ex1();
}

main();

//
// File: main.js
// Date: 5/24/2022
// // 
// *Create an arrow function called 'countNumbers' that takes an array and returns the number of numbers in it
// const array = () => [1, '2', 3, 'test', 1.2];
//   console.log(array.length);  
  
const array = [1, '2', 3, 'test', 1.2, 8, 'dan'];

console.log(array);

// let countLength = (a) => a.length;
// console.log(countLength(array));



const countNumbers = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        count++;
      }
    }
    return count;
  };


// const main = () => {
//     const numbers = [1,2,3,4,5,6]
//     const newNumbers = numbers.filter(n => n > 2)
//     console.log(newNumbers)
//     console.log(numbers)
// }

    // let countNumbers = array.length
      // console.log(countNumbers(array));

// const ex2 = () => {
//     // TODO...
// }


const minNumber = (x) => {
    let min = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] < min) {
        min = x[i];
      }
    }
    return min;
  };

  const array = [12, 55, 2, 22, 11, 1, 20, .5];
    console.log(minNumber(array));

// const ex3 = () => {
//     // TODO...
// }

//
const interleave = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return "ERROR: array length mismatch.";
  }
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }
  return result;
};

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
console.log(interleave(array1, array2)); // Output: [1, 'a', 2, 'b', 3, 'c']

// const countNumbers = (array) => {
//     let retval = 0;
//     // TODO...
//     return retval;
// }

// const main = async () => {
//     ex1();
// }

main();


// const palindrome(str) {
// var len = str.length;
// for (var i = 0; i < len/2; i++) {
//   if (str[i] !== str[len - 1 - i]) {
//       return false;
//   }
// }
// return true;
// }

 

// Alternative answer* 
const palindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

console.log(palindrome('radar'));
console.log(palindrome('month'));




// -------------------------------------------------
// EX 5

let str = "today this is a this is a this is a test."; 

// Display the number of times the world "this" appears: 

let wordCount = (str.match(/this/g) || []).length;
console.log(wordCount);

// output: 
// this appears: 3 times

console.log(str.split("this").length - 1);


// -----------------------------------------------------
// // EX 6
// Create an arrow function named: longestString that returns the longest string fron an array of srtings


let array = ['this', 'is', 'a', 'test', 'happy', 'Farjana', 'hello', 'Marty', 'Mississippi', 'McLennan'];

const longestString = (array) => {

let maxString = array[0].length; 
let answer = array[0];

for (let i = 1; i <array.length; i++) {
     let max = array[i].length; 

     if (max>maxString) {
        answer = array[i]; 
        maxString = max;
     }
}
    return answer;
}
console.log(longestString(array));