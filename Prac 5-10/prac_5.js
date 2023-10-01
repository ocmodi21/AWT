class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }

  calculateMileage() {}
}

class Car extends Vehicle {
  constructor(make, model, year, fuelEfficiency) {
    super(make, model, year);
    this.fuelEfficiency = fuelEfficiency;
  }

  displayDetails() {
    super.displayDetails();
  }

  calculateMileage(distance) {
    const mileage = distance / this.fuelEfficiency;
    console.log(`Mileage for the car: ${mileage}`);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, fuelEfficiency) {
    super(make, model, year);
    this.fuelEfficiency = fuelEfficiency;
  }

  displayDetails() {
    super.displayDetails();
  }

  calculateMileage(distance) {
    const mileage = distance / this.fuelEfficiency;
    console.log(`Mileage for the motorcycle: ${mileage}`);
  }
}

const myCar = new Car("Audi", "A4", 2004, 30);
myCar.displayDetails();
myCar.calculateMileage(300);

const myMotorcycle = new Motorcycle("yamaha", "crux", 2004, 50); // 50 MPG
myMotorcycle.displayDetails();
myMotorcycle.calculateMileage(100);
