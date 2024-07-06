class Car{
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(10 + this.speed);
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed, 'braked');
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
ford.speedUs = 50;
console.log(ford);