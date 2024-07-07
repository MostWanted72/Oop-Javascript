class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return this;
  }

  brake() {
    this.speed -= 5;
    return this;
  }
}

class Ev extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const tesla = new Ev("Tesla", 120, 23);

tesla.chargeBattery(20);
tesla.brake();
tesla
  .accelerate()
  .chargeBattery(50)
  .brake()
  .accelerate()
  .accelerate()
  .chargeBattery(20)
  .brake();
console.log(tesla);
