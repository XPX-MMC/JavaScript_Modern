// 
// File: variables-block-scope.js
// Date: 3/21/2022
// Desc: To run, execute: node variables-block-scope
//

const MEANING_OF_LIFE = 42;

// ES5: vars can be used before they are declared, use let/const instead.
// ES5: Vars are globally scoped, use let/const instead.
catName = "Gypsy"
var catName // NEVER USE VAR IN MODERN JAVASCRIPT

const variables = () => {
    let num1 = 10;  // Delcare a variable called num1 and initialize it to 10.
    let num2 = 20;  // Delcare a variable called num1 and initialize it to 20.
    
    console.log(num1, num2); // Display the contents of these variables on the console.
}

const constants = () => {
    const NUM_1 = 10; // Delcare a constant called num1 and initialize it to 10.
    const NUM_2 = 20; // Delcare a constant called num1 and initialize it to 20.

    NUM_1 = 55; // Error!  Cannot change a constant.

    // ProTip: Always favor const over let, never use var.
    console.log(NUM_1, NUM_2);
}

const scope = () => {
    // let and const have block scope, between the curly braces.
    const MEANING_OF_LIFE = 42; // <== this is used, not the one on line 6.
    let num1 = 70; // <== this is used, not the ones on line 9, 16.
    var num2 = 54; // <== Old ES 5 approach, DO NOT USE VAR.

    console.log(MEANING_OF_LIFE); 

    {
        let num1 = 5150;
        console.log(num1);
    }
}


//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

variables();
//constants();
//scope();

