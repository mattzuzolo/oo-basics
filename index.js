class Vehicle {
  constructor(make, model, topSpeed, color, year){
    this.make = make;
    this.model = model;
    this.topSpeed = topSpeed;
    this.color = color;
    this.year = year;
  }

  selfIdentifier(){
    console.log(`${this.make} ${this.model} is a vehicle`);
  }

  accelerate(){
    console.log(`${this.make} ${this.model} is accelerating`);
  };

  brake(){
    console.log(`${this.make} ${this.model} is braking`);
  };
}

class Car extends Vehicle {
  constructor(make, model, topSpeed, color, year, numberOfWheels, fuelType, dealership){
    super(make, model, topSpeed, color, year);
    this.numberOfWheels = numberOfWheels;
    this.fuelType = fuelType;
    this.dealership = dealership;
  }

  fillGasTank(){
    console.log(`Filling ${this.model} with ${this.fuelType} gas`);
  }

  payToll(){
    console.log(`${this.make} ${this.model} is paying the toll`);
  }
}

class Airplane extends Vehicle {
  constructor(make, model, topSpeed, color, year, numberOfWings, crewSize, foodOptions){
    super(make, model, topSpeed, color, year);
    this.numberOfWheels = numberOfWings;
    this.crewSize = crewSize;
    this.foodOptions = foodOptions;
  }

  serveFood(){
    console.log(`${this.make} ${this.model} has these options to eat:`);
    this.foodOptions.forEach(option => console.log(option))
  }

  takeOff(){
    console.log(`${this.model} is about to takeoff`);
  }

  land(){
    console.log(`${this.model} is about to land`);
  }
}

let vehicleOne = new Vehicle("Jeep", "Wrangler", 75, "black", 2016);
let vehicleTwo = new Vehicle("Boeing", "787", 600, "white", 2018);

console.log("vehicleOne:", vehicleOne);
console.log("vehicleTwo:", vehicleTwo);

vehicleOne.selfIdentifier();
vehicleTwo.accelerate();

console.log("—————————");

let carOne = new Car("Honda", "Civic", 85, "red", 2019, 4, "regular", "Dealship A");
let carTwo = new Car("Audi", "R8", 160, "silver", 2017, 4, "premium", "Dealship C");

console.log("carOne", carOne);
console.log("carTwo", carTwo);

carOne.fillGasTank();
carTwo.fillGasTank();
carTwo.payToll();

console.log("—————————");

let airplaneOne = new Airplane("Boeing", "737", 500, "blue", 2004, 2, 5, ["Pretzels", "Peanuts"]);
let airplaneTwo = new Airplane("Airbus", "A380", 550, "Gold", 2017, 2, 12, ["Chicken", "Pasta", "Fish"]);

console.log("airplaneOne", airplaneOne);
console.log("airplaneTwo", airplaneTwo);

airplaneOne.serveFood();
airplaneTwo.serveFood();
airplaneOne.takeOff();
airplaneTwo.land();