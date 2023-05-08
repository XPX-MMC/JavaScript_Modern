# Modern JavaScript for React Developers Assignments

## Ex. 0
Modernize [this](./modern-js.js) JavaScript file.  Replace the legacy functions with arrow functions and replace var with either let or const.  There's a function signature that isn't right. Can you find it and fix it?
When you are finished, place this file in your student directory and submit a PR.

## Ex. 1
Create an arrow function called `countNumbers` that takes an array and
returns the number of numbers in it.

Usage:
```
const array = [1, '2', 3, 'test', 1.2];
console.log(countNumbers(array));
```

Output:
```
3
```

## Ex. 2
Create an arrow function called `minNumber` that takes an array of numbers and
returns the lowest number.  The function must use a for loop.

Usage:
```
const array = [12, 55, 2, 22, 11];
console.log(minNumber(array));
```

Output:
```
2
```

## Ex. 3
Create an arrow function called `interleave` that accepts two arrays and interleave them.  The function returns the following error string if the two arrays have a different length:  `ERROR: Array length mismatch`

Usage #1:
```
const array1 = [1, 2, 3, 4, 5];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array1, array2));
```

Output:
```
1a2b3c4d5e
```

Usage #2:
```
const array1 = [1, 2];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array1, array2));
```

Output:
```
ERROR: Array length mismatch
```
## Ex. 4
Write an arrow function named: `palindrome` that returns a boolean if a string is a palindrome:

Usage:
```
console.log(palidrome('radar'));
console.log(palidrome('month'));
```
Output:
```
true
false
```

## Ex. 5
Given the following string:

```
let str = "today this is a this is a this is a test.";
```

Display the number of times the word `this` appears:

Output:
```
this appears: 3 times.
```

## Ex. 6
Create an arrow function named: `longestString` that returns the longest string from an array of strings:

Usage:
```
array = ['this', 'is', 'a', 'test', 'happy'];
console.log(longestString(array));
```

Output:
```
happy
```

## Ex. 7

Create an arrow function named: `sort` that sorts an array of numbers in ascending order:

Usage:
```
let n = [1, 3, 6, 3, 6, 10];
console.log(sort(n));
```
Output:
```
[ 1, 3, 3, 6, 6, 10 ]
```

## Ex. 8

Create an arrow function named: `countWords` that counts the number of words for this string:

Usage:
```
let words = "Count the words in this string";
console.log(countWords(words));
```

Output:
```
6
```

## Ex. 9
Create an arrow function named: `countS` that counts the number of words that end in "s":

Usage:
```
var a = "this counts the number of words that end in s";
console.log(countS(a));
```

Output:
```
4
```

## Ex. 10
Create an arrow function named: `countLetters` that counts the number of letters for an array of words:

Usage:
```
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
```

Output:
```
11
```

Bonus points for using `map` and `reduce`.

## Ex. 11
Create an arrow function named: `numberOnly` that counts the number of numbers in an array:

Usage:
```
let arr = ['dog', 3, 7, 'cat', 13, 'car'];
console.log(numbersOnly(arr));
```

Output:
```
[ 3, 7, 13 ]
```

## Ex. 12 
Create a `Calculator` class that performs simple math operations and prints the results of all the calculations to the console.

Usage:
```
const c = new Calculator();
c.add(1,2);
c.sub(4,1);
c.div(10,2);
c.mul(2,2)
console.log(c.getHistory())
```

Output:
```
Add: 1 + 2 = 3
Sub: 4 - 1 = 3
Div: 10 / 2 = 5
Mul: 2 * 2 = 4
```

## Ex. 13

Given the following dictionary:

```
    let dict = [
        { "firstName": "joe", "lastName": "smith", age: 10 },
        { "firstName": "paul", "lastName": "simmon", age: 20 },
        { "firstName": "fred", "lastName": "jones", age: 30 },
    ]
```

Display the total age on the console:

Output:
```
The total age is: 60.
```

## Ex. 14

Given the following data:

```
    let customers = [{
        name: 'ABC Inc',
        credit: 100
    }, {
        name: 'ACME Corp',
        credit: 200
    }, {
        name: 'IoT AG',
        credit: 300
    }];
```

Display the item whose credit is 200, do not use a for loop.

Output:
```
{ name: 'ACME Corp', credit: 200 }
```
