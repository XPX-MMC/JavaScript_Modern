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
    const array1 = [1, 2, 3, 4, 5];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array1, array2));

}

//
// Your functions here...
//

// function called interleave holding array1 and array 2
const interleave = (array1, array2) => { 
    // (.length is iterates thorugh the whole array)
    // if array1 is not equal to array2 then it will return that message
    if (array1.length !== array2.length) {

    //will return the message below if array1 and 2 are not equal
        return "ERROR: Array length mismatch";
    }

    let sameLength = " "; 

    for (let i = 0; i < array1.length; i++ )
    sameLength += array1[i] + array2[i]
    return sameLength;
} 




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
    ex3();
}

main();
