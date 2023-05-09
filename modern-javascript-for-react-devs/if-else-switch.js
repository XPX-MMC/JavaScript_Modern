//
// File: if-else-switch.js
// Date: 5/24/2022
// Desc: 
//
let name = 'Richard';
let company = 'PiedPiper';

const ifElse = () => {
    let a = 1
    if (a == 1) {
        console.log('It is equal')
    }

    // if (a == 5) console.log(5)
    // else return undefined;

    if (a == 1) {
        console.log('here')
    } else {
        console.log('over here')
    }

    if (a == 2) {
        console.log('here')
    } else if (a == 3) {
        console.log('now here')
    } else {
        console.log('now end')
    }
}

const switchExample = (name) => {
    // let name = "Joey"

    switch(name) {
        case "Phoebe":
          console.log("Hello Phoebe");
          break;
        case "Ross":
          console.log("Hello Ross");
          break;
        default:
          console.log("I don't know you");
    }
}

switchExample('Chandler');

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

ifElse();
//switchExample();


let arr = ['a', 'b', 'c'];

for (let i in arr) {
console.log(i);
// logs "0", "1", "2"
}

for (let o of arr) {
console.log(o);
// logs a, b, c
}