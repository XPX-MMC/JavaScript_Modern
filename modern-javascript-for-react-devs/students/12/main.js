//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    // const array = [];
    console.log(countNumbers(array));
}

const ex2 = () => {
    // TODO...
    // const array = [12, 55, 2, 22, 11];
    const array = [287, 6, 88, 0, 25]
    console.log(minNumber(array));
}

const ex3 = () => {
    // TODO...
    // const array1 = [1, 2, 3, 4, 5];
    // const array2 = ['a', 'b', 'c', 'd', 'e'];
    // console.log(interleave(array1, array2));

    const array1 = [1, 2];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}

//
// Your functions here...
//

const countNumbers = (array) => {
   let numberCounter = 0;
   for (let i = 0; i < array.length; i++) {
       if (typeof(array[i]) === 'number') numberCounter++;
   }
   return numberCounter;
   // console.log(countNumbers(array));
}

const minNumber = (array) => {
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < result) {
            result = array[i]
        }
    }

    return result;
}

const interleave = (array1, array2) => {

        let newStr = "";
        if (array1.length !== array2.length) {
            return "ERROR: Array length mismatch";
        }

        for (let i = 0; i < array1.length; i++) {
            newStr += array1[i];
            newStr += array2[i];

            // newArr.push(array1[i], array2[i]);
        }


        return newStr;
}


//result= 2
//[12, 55, 2, 22, 11]
//                    i

const main = async () => {
    // ex1();
    ex3(); 
}

main();
