//
// File: main.js
// Date: 5/24/2022
// 

//EX 1
const countNumbers = (array) => {
    let count = 0;

    for (let i = 0; i < array.length; i++){
        if (typeof array[i] == 'number'){ 
        count++; 
        }
    }

    return count;
};

const array = [1, '2', 3, 'test', 1.2];
console.log(countNumbers(array));

//EX 2
// const ex2 = () => {
//     // TODO...
// }

//EX 3
// const ex3 = () => {
//     // TODO...
// }

// //
// // Your functions here...
// //

// const countNumbers = (array) => {
//     let retval = 0;
//     // TODO...
//     return retval;
// }

// const main = async () => {
//     ex1();
// }

// main();
