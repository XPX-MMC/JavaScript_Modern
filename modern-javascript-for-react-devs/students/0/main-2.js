//
// File: solutions2.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}

const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}


//
// Your functions here...
//

const minNumber = (array) => {
    let retval = 0;
    for (let number of array) {
        if (number < retval || retval == 0 ) {
            retval = number;
        }
    }
    return retval;
}

const countNumbers = (array) => {
    let retval = 0;
    for (let item of array) {
        if (typeof(item) == 'number') {
            retval++;
        }
    }
    return retval;
}

const interleave = (array1, array2) => {
    let retval = 'ERROR: Array length mismatch';
    if (array1.length == array2.length) {
        retval = '';
        for (let i = 0; i < array1.length; i++) {
            retval += array1[i] + array2[i];
        }
    }
    return retval;
}


const main = async () => {
    ex3();
}

main();
