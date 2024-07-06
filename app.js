// constructor function  --- should start with Capital letter
const Person = function(firstName, birthYear) {
  // console.log(this) // Pseron {}

  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this bad practice
  // this.calAge = function() {
  //   console.log(2030 - this.birthYear);
  // }
}

// a constructor function is basically a function with a new keyword
const nanna = new Person('Nanna', '1998');

// 1. the new keyword creates {} object;
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const rohan = new Person('Rohan', 2004);

console.log(nanna, rohan)

// rohan and nanna are both serperat and they do not interact.


// Prototype each object with new keyword are already assigned prototype we can use this to write our methods


// this way only one copy of the method exist while in the privous method it made new copy of method for every person.
Person.prototype.calAge = function() {
  console.log(2030 - this.birthYear);
}

rohan.calAge()

console.log(rohan.__proto__)  // proto

// species is not its own Pesons own property but it's prototype property
Person.prototype.species = 'Homo Sapiens';

console.log(rohan.species);  // 'Homo Sapiens'
