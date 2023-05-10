//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    const array = [12, 55, 2, 55, 11];
    console.log(minNumber (array));
    // TODO...
}

const ex3 = () => {
    // TODO...
}

//
// Your functions here...
//

//Exercise1
const countNumbers = (array) => {
    let numberCounter = 0;
    // TODO...3
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number')  numberCounter++;
    console.log (typeof(array[i]));
   }
    return numberCounter;
} 

//Exercise2

const minNumber = (array) => {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
           min = array[i] 
        }

    }
    // done 
return min;

}


const main = async () => {
    //ex1();
    ex2();
}


main();

