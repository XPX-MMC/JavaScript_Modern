//
// File: main.js
// Date: 5/24/2022
// 

const countNumbers = (array) => {
    let numberCounter = 0;

    for (let i = 0; i < array.length; i++) {
        if(typeof(array[i]) == 'number') numberCounter++;

    }

    return numberCounter
}

//counter 3
// [1, '2', 3, 'test', 1.2]
//                      i


// console.log(testCaseArray1.length)
const ex1 = () => {
    const testCaseArray1 = [1, '2', 3, 'test', 1.2];

    console.log(countNumbers(testCaseArray1));
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


const main = async () => {
    ex1();
}

main();
