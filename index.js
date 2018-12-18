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

let vehicleOne = new Vehicle("Jeep", "Wrangler", 75, "black", 2016);
let vehicleTwo = new Vehicle("Boeing", "787", 600, "white", 2018);

console.log("vehicleOne:", vehicleOne);
console.log("vehicleTwo:", vehicleTwo);

vehicleOne.selfIdentifier();
vehicleTwo.accelerate();