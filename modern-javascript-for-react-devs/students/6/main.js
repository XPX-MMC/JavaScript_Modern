//
// File: main.js
// Date: 5/9/203
// Imane Allay

//_______________________________________________________

//Exercice 0:  in the modern-js
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

//Exercice1
const countNumbers = (array) => {
    
    
    let c = 0;
    for (let i=0;i<array.length;i++){
        if (typeof(array[i])=='number'){
            c++;
        }
        
    }return c;
    
}

const main = async () => {
    ex1();
}

main();
