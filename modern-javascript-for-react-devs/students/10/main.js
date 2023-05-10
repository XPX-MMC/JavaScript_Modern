//
// File: main.js
// Date: 5/24/2022
// 
const ex1 = () =>
{
    const array = [10, 20, 40,'65','tests', 5.9, 19];
    //const array = [1, '2', 3, 'test', 5.7, 1.2];
    console.log(countNumbers(array)); 
}

const ex2 = () =>
{
    //const array1 = [12, 55, 2, 22, 11];
    //const array1 = [100, 99,76,12,59,3000, .5]
    const array1 = [4000, 3000,59,.3,76,99, .2]
    console.log(minNumber(array1));
}

const minNumber = (array) => 
{
   let lowestNumber=array[0];
    for (let i=1; i < array.length; i++)
    {
        if (lowestNumber >= array[i])
        {
            lowestNumber=array[i];
            //console.log(lowestNumber, i);
        }   
    }
    return lowestNumber;
}

const ex3 = () => {
    // TODO...
}


 //Your functions here...


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
    ex2();
}

main();
