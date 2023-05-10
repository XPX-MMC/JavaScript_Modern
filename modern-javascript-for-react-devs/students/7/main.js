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
    
    
    
    const minNumber = (array) => {
        let minCounter = 0;
    
        for (let i = 0; i < array.length; i++) {
            if(i==0)
                minCounter= array[0]
            else if(minCounter>array[i])
                minCounter= array[i]
        
    
        }
    
        return minCounter
    }

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}





const ex3 = () => {
    // TODO...
}

//
// Your functions here...
//


const main = async () => {
    ex1();
    ex2();
}

main();
