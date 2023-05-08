//
// File: lecture-1.js
// Date: 3/21/2022
// Desc: To run, execute: node loops-operators
//

// Variables 
//  - Null/Undefined.
// Loops
// Functions
// Scope: // https://www.w3schools.com/js/js_scope.asp
// Arrays & Dictionaries

// ES5: vars can be used before they are declared, use let/const instead.
// ES5: Vars are globally scoped, use let/const instead.
catName = "Gypsy"
var catName

// ES6 New features: https://www.w3schools.com/js/js_es6.asp

// String, Numbers, Boolean, null, undefined (5)... really 7
const theName = "Joe"
const age = 20;
const rating = 4.5
const isCool = true
const x = null
const y = undefined  // undefined is reserved for the javascript engine.
let z;

console.log(typeof theName);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z)

// Functions

function test() {
    console.log('here')
}

const main = (number, string) => {
  catName = "Joe"
  //console.log(number, string)
  //console.log(catName)
  
}

// Loops


// Arrays
// Weakly typed.
const a = ['apples', 'oranges', 11, true];

console.log(a);

// Dictionaries


main()


