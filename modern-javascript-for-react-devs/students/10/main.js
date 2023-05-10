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
    const array1 = [4000, 3000,59,.3,76,99, .2];
    console.log(minNumber(array1));
}

const ex3 = () => 
{   const array1 = [1, 2];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    //const array1 = [1, 2, 3, 4, 5];
    //const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}

const ex4 = () =>
{
    //console.log(palindrome('radar'));
    console.log(palindrome('month'));
}
const ex5 = () =>
{
    let str = "Tommorrow is never Today Today is never Tommorrow Yesterday is never Today"
    let word = "Today"
    //let str = "Today is a this is a this is a test"
    //let word = "this"
    let returnedBackFromFunction = theNumberOfTimes(str, word);
    console.log(word + " appears: " + returnedBackFromFunction + " times.");
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

const interleave = (array1,array2) => 
{
    let interleavedArray = [];
    let n = array1.length;
    let message = "";
    for (let i=0; i < n; i++)
    {
        if (array1.length == array2.length)
        {
            interleavedArray.push(array1[i]);
            interleavedArray.push(array2[i]);
            message = interleavedArray.toString();
        }
        else
            message = "ERROR: Array length mismatch."
    }
    return message;
}
const palindrome = (passedString) => 
{
    let passedStringArray = passedString.split('');
    //console.log(passedStringArray);
    let reverseStringArray = passedString.split('').reverse('');
    //console.log(reverseStringArray);
    let bool = true;
    for(let i = 0; i < passedStringArray.length; i++)
    {
     if (passedStringArray[i] != reverseStringArray[i])
     {
        bool = false
     }
     return bool;
    }

}
const theNumberOfTimes = (passedString, word) =>
{
let taKeOutWhiteSpaces = passedString.toLowerCase().split(' ')
let countWord = 0; 
console.log(taKeOutWhiteSpaces);
let i = 0;
while (i < taKeOutWhiteSpaces.length)
{
    //console.log(taKeOutWhiteSpaces.length)
    if (taKeOutWhiteSpaces[i] === word.toLowerCase())
    {
        //console.log(taKeOutWhiteSpaces[i], i)
        countWord++;
        i++;
        //console.log(countWord);
    }
    else
        i++;
}
//console.log(countWord)
return countWord


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
    ex5();
}

main();
