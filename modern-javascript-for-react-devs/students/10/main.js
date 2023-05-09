//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, 2 , 4, 5, '2', 3, 'test', 5.7, 1.2];
   // const array = [1, '2', 3, 'test', 1.2];
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

const countNumbers = (array) => 
{
    let retval = 0;
    let i = 0;
    //return length of array
    while( i < array.length)
    {
        if (typeof array[i] == 'number')
        {
            retval++;
            i++;
            //console.log(retval)
            //console.log(i)
        }
       else
          i++;
    }
    return retval;
}
const main = async () => {
    ex1();
}

main();
