const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(10 + this.speed);
  this.speed = 10 + this.speed;
};

Car.prototype.brake = function () {
  console.log(this.speed - 5 < 0 ? 0 : this.speed - 5);
  this.speed = this.speed - 5 < 0 ? 0 : this.speed - 5;
};

const BMW = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95)

BMW.accelerate();
BMW.accelerate();
BMW.brake();
