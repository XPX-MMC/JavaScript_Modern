// https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing

const changeStuff = (a, b, c) => 
{
  a = a * 10                   // Primitive types are passed by copy.
  b.firstName = "ALICE"        // Reference types: Updates to interals are propogated.
  c = { firstName: "Charlie" } // Reference types: New creations are not propogated.
}

let num = 10;
let person1 = { firstName: "Alice" }
let person2 = { firstName: "Bob" }

changeStuff(num, person1, person2)

console.log(num)
console.log(person1.firstName)
console.log(person2.firstName)
