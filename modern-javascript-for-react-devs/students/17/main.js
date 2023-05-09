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
}

const ex3 = () => {
    // TODO...
}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;

    for (let i= 0; i < array.length; i++) {

        if (typeof(array[i]) == 'number')
            retval+= 1; 
    }
    
    return retval;
}
// test cases for ex.1

array1 = ["6", "valerie", false, 5, 3]
array2 = [6, "sky","sun", 5, "3"]
array3 = ["valerie", true, 5, "3"]

const main = async () => {
    ex1();
}

main();
