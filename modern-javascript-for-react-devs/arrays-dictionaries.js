//
// File: arrays-dictionaries.js
// Date: 5/24/2022
// Desc: To run, execute: node arrays-dictionaries.js
// Refs: https://www.w3schools.com/jsref/jsref_obj_array.asp
//

const arrays = () => {
  const numbers = ["one", "two", "three"];
  const numbers2 = ["one", 2, "three", 4]; // Weakly typed.
  const numbers3 = [1, 2, 3, 4];

  console.log(numbers2[0]);
  console.log(numbers2[1]);
  console.log(numbers2[2]);

  numbers.push("four");

  // Map...
  let newArray = numbers3.map((i) => i * 2); // Double it.
  // let newArray = numbers3.map(function(i) {
  //     return i * 2;
  // }) // Double it.

  // Filter..
  let newFilteredArray = numbers3.filter((i) => i > 2);

  // Find...
  let result = numbers3.find((i) => i == 2);

  // Iteration...
  let outString = "";
  numbers3.forEach(i => {
    outString += i + ", "
  });
  const theResult = outString.slice(0, outString.length-2)

  console.log(newArray);
  console.log(newFilteredArray);
  console.log(result);
  console.log(theResult);
};

const dictionaries = () => {
  const dictionary1 = { firstName: "Joe", lastName: "Smith" }; // Object
  const person = { firstName: "Tom", lastName: "Thumb" }; // <== JSON

  const usersDictionary = {
    // Like a Java HashMap.
    1111: { name: "Bob Marley" },
    2222: { name: "Charlie Daniels" },
  };

  usersDictionary[3333] = { name: "David Banner" }; // Dynamically add a user.
  usersDictionary["4444"] = { name: "Ellie Kemper" }; // Weakly typed.

  console.log(dictionary1.firstName);
  console.log(dictionary1.lastName);
  console.log(person);
  console.log(usersDictionary[4444]);
};

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

arrays();
//dictionaries();
