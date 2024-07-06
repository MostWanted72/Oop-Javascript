const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function() {
  this.speed += 10;
}

const Ev = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeTo = function(charge) {
  this.charge = charge;
}

Ev.prototype.accelerate = function() {
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make} is going at ${this.speed} km/h, with charge of ${this.charge}`)
}

Ev.prototype.brake = function() {
  this.speed -= 5;
}

Ev.prototype.chargeBattery = function() {
  this.charge = 98;
}

const tesla = new Ev('Tesla', 120, 23);
console.log(tesla)

tesla.chargeTo(20);
tesla.brake();
tesla.accelerate()
