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
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));

}

const ex3 = () => {
    // TODO...
}

//
// Your functions here...
//
const minNumber = (array) => { 
    let lowestNumber = array[0];
    
    for (let i = 0; i < array.length; i++) { 

        if (array[i] < lowestNumber) {
    lowestNumber = array [i];

    
        } 
        
    }
        return lowestNumber; 
  
}


const countNumbers = (array) => {
    let numberCounter = 0;
    // TODO...
    for (let i = 0; i < array.length; i++) {

        if (typeof(array[i]) === 'number') numberCounter++;

    }
    return numberCounter;


}
// call your test cases
const main = async () => {
    ex2();
}

main();
