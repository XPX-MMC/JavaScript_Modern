//
// File: loops-operators.js
// Date: 3/21/2022
// Desc: To run, execute: node loops-operators
//

const forLoops = () => {
    
    // Classic for loop.
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log("*".repeat(5));

    // For-in Loop.
    const person = { fname: "John", lname: "Doe", age:25 };
    let text = "";
    for (let x in person) { // Key
      text += person[x];
    }
    console.log(text);
    console.log("*".repeat(5));

    // For-of.
    const fruits = ['bannana', 'apple', 'orange'];
    let text2 = "";
    for (let f of fruits) {
       console.log(f);
    }
    console.log("*".repeat(5));

    // Nested for loop.
    for (let i = 0; i < 3; i++) {
        console.log(`i: ${i}`);
        for (let k = 0; k < 3; k++) {
            console.log(`  k: ${k}`);
        }
    }
    console.log("*".repeat(5));

    // ForEach.  NOTE: ForEach does NOT await!  Use a for-of instead!
    const cars = ['ford', 'chevy', 'dodge']
    cars.forEach(c => {
        console.log(c)
        // await doWork() // await won't work here.
    })
}

const whileLoops = () => {
    // while loop.
    let i = 0;
    while (i < 3) {
        console.log(i);
        i++;
        if (i == 5) {
            break; // Will never execute.
        }
    }
    console.log("*".repeat(5));

    // do while loop.
    i = 0;
    do {
        i++;
        console.log(i);
    }
    while (i < 3);
    console.log("*".repeat(5));
}

const operatorPrecendence = () => {
    //
    // High: ()
    //       *
    //       /
    //       +
    // Low:  -
    //

    let r = 0;
    r = 3 * 2 + 4;
    console.log(r);

    r = 3 * 2 + 6 * 1;
    console.log(r);

    r = (3 * 2 + 2)/ 2;
    console.log(r);
}

const shortCircuit = () => {

    const showContents = true;
    let anotherCondition = false; // doesn't matter if this is true or false.
    let htmlContents = "<html><head></head><body>Hello World</body></html>";

    if (showContents || anotherCondition) { // anotherCondition will never be evaluated.
        console.log(htmlContents);
    }

    if (showContents && htmlContents) {
        console.log(htmlContents);
    }
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

forLoops();
//whileLoops();
//operatorPrecendence();
//shortCircuit();
