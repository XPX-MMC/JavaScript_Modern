// 
// File: types-coercion-equality.js
// Date: 3/21/2022
// Desc: To run, execute: node types-coercion-equality
//

import Person from './classes/Person.js'

const types = () => {
    // (null, undefined, boolean, number, string, symbol, and BigInt)
    let b = false; // JavaScript infers the type for us: boolean.
    // Boolean b = false; // Don't have to do this in JavaScript because its a weakly typed dynamic language.

    console.log(typeof(b));
    b = 123; // Now JavaScript infers the type for us: number.
    console.log(typeof(b));
}

const typesPrimative = () => {
    //
    // Primative types (Stack):
    //  null, undefined, boolean, number, string, symbol, and BigInt
    //
    let a = null;
    let b = undefined;
    let c = false; 
    let d = 123;
    let e = "Hello World";
    let f = Symbol('foo');
    let g = 2n ** 53n;
    
    console.log(typeof(a)); // <== object???
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d));
    console.log(typeof(e));
    console.log(typeof(f));
    console.log(typeof(g));

    console.log(f.description);

    // These are the important ones: null, undefined, boolean, number, string
}

const typesReference = () => {
    // Reference types point to objects (Heap).

    // Array
    const messyArray = [1, 2, 3, 'test', 1.234, null, "test"];
    console.log(messyArray);
    console.log(typeof(messyArray));
    console.log(typeof(messyArray[3])); // Arrays are zero based. 

    // Dictionary
    const dictionary = {}; 
    dictionary[1] = 'one';
    dictionary[2] = 'two';
    dictionary[3] = 'three'; // <== We can add items to a const dictionary and array.
    console.log(dictionary);
    console.log(dictionary[2]);
    console.log(typeof(dictionary));

    // Class
    let mary = new Person('Mary');
    mary.introduceSelf();
    console.log(typeof(mary));

    // Set
    const mySet1 = new Set();
    mySet1.add(1)
    mySet1.add(1)
    mySet1.add(2)
    mySet1.add(2)
    mySet1.add(3)
    mySet1.add(4)
    console.log(mySet1) // Sets remove dupes.
    console.log(typeof(mySet1));
}

const coercion = () => {
    // AKA: casting
    const a = "1";
    const b = 2;
    let result = a + b; // <== JavaScript coerced (casted) the number to a string.
    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(result));
    console.log(result);
}

const equality = () => {
    //
    // Understanding equality and reference change is SUPER IMPORTANT when 
    // working with State and React components.
    //

    let a = 1;
    let b = 2;

    // ProTip: In general, use the triple equals.
    if (a == b) { // Double equals: JavaScript will coerce the types, hopefully its the right type for you!
        console.log('equal');
    }

    if (a === b) { // Three equals: Compare without having JavaScript automatically coerce the items.
        console.log('equal');
    }

    let p1 = new Person('Joe');
    let p2 = new Person('Joe');
    let p3 = p2;

    if (p1 === p2) {
        console.log('Here')
    }

    if (p2 === p3) {  // We can also do: !==
        console.log('HERE!!!')
    }

    // React use reference equality to detect changes in state.
    // Using the spread operator changes the head of the array, 
    // and React will detect this array as being changed.

    let c = [1,2,3];
    c.push(4); 
    c = [...c];
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

//types();
//typesPrimative();
typesReference();
//coercion();
//equality();
