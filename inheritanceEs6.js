class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2030 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this._fullName}`);
  }

  get age() {
    return 2030 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert('Please enter a valid full name');
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey there");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happend first;
    super(fullName, birthYear)
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`)
  }

  // concept of polymorphism is to overwrite when the same function is used in children classes
  calcAge() {
    console.log(`I am ${2030 - this.birthYear} but I feel like I am ${2030 - this.birthYear + 10} year's old`)
  }
}

const maya = new StudentCl('Maya Rose', 2014, 'Computer Science');
console.log(maya)
maya.introduce()
maya.calcAge()


// 1. Public fields
// 2. Private Fields
// 3. Public Methods
// 4. Private Methods

// there is also static versions

class Account {
  // 1. public fields;
  local = navigator.language;
  
  // 2. private fields;
  #movements = [];
  #pin

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected data
    this.#pin = pin;
    // protected data
    // this._movements = [];
    // this.local = navigator.language;

    console.log(`Thanks for opening new account ${owner}`)
  }

  // 3. Public Methods
  getMovements() {
    return this.#movements;
  }

  // Public Interface or public api
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved')
      return this;
    }
  }

  // private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Nanna', 'RS', 1111);
console.log(acc1);

acc1.deposit(240);
acc1.withdraw(140);

acc1.requestLoan(1000)

// cannot be accessed as it is a private field
// console.log(acc1.#movements)
// console.log(acc1.#approveLoan)

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements());