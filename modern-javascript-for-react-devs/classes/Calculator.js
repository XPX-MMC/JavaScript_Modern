//
// File: Calculator.mjs
// Auth: Martin Burolla
// Date: 3/22/2022
// Desc: Simple Calculator class.
//

export default class Calculator {

    ///////////////////////////////////////////////////////////////////////////
    // Data members (fields or properties)
    ///////////////////////////////////////////////////////////////////////////
    
    #historyList;

    ///////////////////////////////////////////////////////////////////////////
    // Constructors
    ///////////////////////////////////////////////////////////////////////////
  
    constructor () {
        this.#historyList = [];
    }
  
    ///////////////////////////////////////////////////////////////////////////
    // Public 
    ///////////////////////////////////////////////////////////////////////////
  
    add(a, b) {
        const retval = a + b;
        this.#historyList.push(`Add: ${a} + ${b} = ${retval}`);
        return retval;
    }

    sub(a, b) {
        const retval = a - b;
        this.#historyList.push(`Sub: ${a} - ${b} = ${retval}`);
        return retval;
    }

    mul(a, b) {
        const retval = a * b;
        this.#historyList.push(`Mul: ${a} * ${b} = ${retval}`);
        return retval;
    }

    div(a, b) {
        const retval = a / b;
        this.#historyList.push(`Div: ${a} / ${b} = ${retval}`);
        return retval;
    }

    getHistory() {
        return this.#historyList.join('\r\n');
    }

}