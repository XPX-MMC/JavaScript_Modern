//
// File: Cat.mjs
// Auth: Martin Burolla
// Date: 3/21/2022
// Desc: Simple Cat class.
//

export default class Cat {

    ///////////////////////////////////////////////////////////////////////////
    // Data members  (fields or properties)
    ///////////////////////////////////////////////////////////////////////////
    
    name = ""; // Public: Accessible outside of this class.
    #age = 4;  // Private: Accessible only with in this class (AKA Hash name)
  
    ///////////////////////////////////////////////////////////////////////////
    // Constructors
    ///////////////////////////////////////////////////////////////////////////
  
    constructor (name) { // Constructor overloading not supported yet.
      this.name = name;
    }
  
    ///////////////////////////////////////////////////////////////////////////
    // Public 
    ///////////////////////////////////////////////////////////////////////////
  
    speak() {
        return `Meow my name is: ${this.name}.`;
    }

    speak2() {
        if (this.#amIHungry()) {
            return "I am hungry!";
        }
    }

    speak3() {
        return `I am ${this.#age} old.`;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Private
    ///////////////////////////////////////////////////////////////////////////

    #amIHungry() {
        return true;
    }
  }
  