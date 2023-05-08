# OOP Reference
Object Oriented Programming (OOP) is the tasteful interaction of objects working together in harmony to 
solve a problem.  In a perfectly balanced OOP solution, all the objects have an equal weight (or responsibility), 
and all the object are formatted exactly the same.  This is much easier to say than it is to do!

# OOP Definitions for JavaScript
OOP with JavaScript is not very mature, but its getting better.  Languages such as Java, C# and C++ implement object oriented concepts more throughly than than JavaScript (ES6).

- Class: A template (blueprint) that is used to create more than one instance of itself
- Constructor: A special method that is used to initialize and setup a class for use when the class is instaniated
- Inheritence: A concept that extends the functionality of a class
- Access modifiers: Allow us to restrict access of behavior and logic for a class.
  - None: Public
  - `#`: Private 
- Overloading: Pass a different set of arguments for the same method.  For example:
  - `getData(personId);`
  - `getData(personId, catId);`
  - `getData(personId, catId, dogId);`
  - In JavaScript constructors do not support overloading, in general function overloading in JavaScript is not a "thing"
- Static: Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance
  - `static`
- Super: This keyword is used to call a method in the base class

# Notes
- [OOP](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Staic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

#### Benefits of OOP
- Code reuse
- Improves extensibility & maintainability
- Provides a tangible way of thinking about software, which is intangible by its nature
- Common mindset adopted by many developers

#### Difference between Class vs. Object
An object is an instance of a class.  A class is a template used to instaniate an object.
