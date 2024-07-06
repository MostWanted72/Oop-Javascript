class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // method will be added prototype 
  calAge() {
    console.log(2030 - this.birthYear);
  }

  get age() {
    return 2030 - this.birthYear;
  }

  set fullName (name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`The ${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const rohan = new PersonCl('Rohan bhatam', 2004);
console.log(rohan)
rohan.calAge()

// classes are not hoisted
// classess are just special kind of functions
// classes are excuted in strict mode.

const walter = new PersonCl('walter white', 1978);
console.log(walter)


// getters and setters

const accont = {
  owner: 'Praveen',
  movement: [1, 2, 3, 4, 10, 12, 3],
  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  }
}

// getters and setters allow the use of methods as if they are properties.
console.log(accont.latest);
accont.latest = 30;
console.log(accont.movement)
