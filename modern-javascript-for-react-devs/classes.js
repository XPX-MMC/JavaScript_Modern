//
// File: classes.js
// Date: 3/21/2022
// Desc: To run, execute: node classes
//

import Cat from "./classes/Cat.js";
import Dog from "./classes/Dog.js";
import Person from "./classes/Person.js";
import Animal from "./classes/Animal.js";

const test = () => {
    let p1 = new Person('Joe'); // Instaniate a Person.
    p1.introduceSelf();

    let c1 = new Cat("Gypsy"); // Instaniate a Cat.
    // let c2 = new Cat("Gypsy", "black"); // Constructor overloading is not supported in JavaScript.
    //console.log(c1.age) // Private!  Returns undefined.
    console.log(c1.speak2());
    console.log(c1.speak3());

    // Pass a Cat into a Person.
    p1.setCat(c1);
    console.log(`The name of my cat is: ${p1.getCatName()}.`);
}

const inheritence = () => {
    const d1 = new Dog(5); // Dog extends (inherits) the Animal class.  What do we get for free?
    d1.speakAge();
    d1.bark();

    const d2 = new Dog(8);
    const d3 = new Dog(11);
    console.log(`Number of animals: ${Animal.animalCount}.`);
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

//test();
inheritence();
