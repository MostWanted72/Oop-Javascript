const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2030 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // .call sets this keywod with the properties inherited from Person to Student
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};


const mike = new Student("Mike", 2003, "Computer Science");

mike.calcAge();

console.dir(mike);
mike.introduce();
