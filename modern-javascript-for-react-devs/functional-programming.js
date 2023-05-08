//
// File: functional-programming.js
// Date: 3/21/2022
// Desc: To run, execute: node functional-programming.js
//

const map = () => {
    // Map: Applies an expression to every item in the collection, returns a
    // new collection.
    let a = [1,2,3];
    let b = a.map(i => i * 2);
    console.log(b)

    // c is an array that contians dictionary objects.
    // Maps are useful for transforming collections into something we desire.
    let c = a.map(i => {
        return { doubleNumber: (i * 2) };
    });
    console.log(c);

    // IMPORTANT!
    // In React, maps are the FUNDAMENTAL way in which we display a 
    // collection of data to the user.
    const p1 = { firstName: "Marty"};
    const p2 = { firstName: "Jane"};
    const p3 = { firstName: "Sally"};
    const personList = [p1, p2, p3];

    const htmlTableStart = "<table><tr>";
    const htmlTableEnd = "</tr></table>";

    let htmlTd = personList.map(p => { // This will be in our JSX expression (React).
        return (`<td>${p.firstName}</td>`);
    })

    const htmlTable = htmlTableStart + htmlTd.join('') + htmlTableEnd;
    console.log(htmlTable);
    // <table>
    //    <tr>
    //      <td>Marty</td>
    //      <td>Jane</td>
    //      <td>Sally</td>
    //    </tr>
    // </table>
}

const sort = () => {
    // Sorting is in-place, modifing the original array.
    const n = [3, 1, 5, 2, 4, 2, 3];
    n.sort((a, b) => {
        return (a < b) ? -1 : 1;
    });
    console.log(n);

    // Sorting complex objects.
    const p1 = { firstName: "Marty", age: 10 };
    const p2 = { firstName: "Jane", age: 20 };
    const p3 = { firstName: "Sally", age: 15 };
    const p4 = { firstName: "Fred", age: 17 };
    const personList = [p1, p2, p3, p4];
    personList.sort((a, b) => {
        return (a.age < b.age) ? -1 : 1;
    });
    console.log(personList);
}

const filter = () => {
    // Filter returns a new list.
    const n = [3, 1, 5, 2, 4, 2, 3];
    let smallList = n.filter(i => i === 3);
    console.log(smallList);
}

const find = () => {
    // Find returns the first element in the provided array.
    const n = [3, 1, 5, 2, 4, 2, 3];
    let r = n.find(i => i === 3);
    // r = 0;
    console.log(n);
    console.log(r);

    // For primative types, find() returns a reference to the
    // element in the provided array if found. If not found, returns
    // undefined.
    const p1 = { firstName: "Marty", age: 10 };
    const p2 = { firstName: "Jane", age: 20 };
    const p3 = { firstName: "Sally", age: 15 };
    const personList = [p1, p2, p3];

    const foundPerson = personList.find(p => p.firstName === "Marty");
    // foundPerson.age = 0; // WWTD
    console.log(foundPerson);
    console.log(personList);
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

map();
//sort();
//filter();
//find();

