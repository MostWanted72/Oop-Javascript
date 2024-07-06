const PersonPrototype  = {
  calcAge() {
    console.log(2030 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const rohan = Object.create(PersonPrototype);

rohan.birthYear = 2004;
rohan.calcAge();

const sara = Object.create(PersonPrototype);

sara.init('Sara', 1994);
sara.calcAge();

console.log(sara)