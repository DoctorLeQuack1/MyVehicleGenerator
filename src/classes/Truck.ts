//import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// DONE: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // DONE: Declare properties of the Truck class
  // DONE: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // DONE: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  public vin : string;
  public color: string;
  public make : string;
  public model : string;
  public year : number;
  public weight: number;
  public topSpeed : number;
  public wheels : Wheel[];
  public towingCapacity : number;


  // DONE: Create a constructor that accepts the properties of the Truck class
    // DONE: The constructor should call the constructor of the parent class, Vehicle
    // DONE: The constructor should initialize the properties of the Truck class
    // DONE: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
  constructor(vin:string, color:string, make:string, model:string, year:number, weight:number, topSpeed:number, wheels:Wheel[], towingCapacity:number) {
    super();
    this.vin = vin ;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.wheels = wheels;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [];
      for (let i : number = 0; i < 4; i++) {
        this.wheels.push(new Wheel());
      }
    }
  }
  
  // DONE: Implement the tow method from the AbleToTow interface
  tow(vehicle: Car | Motorbike | Truck): void {
    if (this.towingCapacity >= vehicle.weight) {
      console.log(`Vehicle: ${vehicle.model} -- ${vehicle.vin} is being towed...`);
    } else {
      console.log(`Vehicle: ${vehicle.model} -- ${vehicle.vin} exceeds ${this.model} -- ${this.vin} towing capacity...`);
    }
    // DONE: Get the make and model of the vehicle if it exists
    // DONE: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // DONE: If it is, log that the vehicle is being towed
    // DONE: If it is not, log that the vehicle is too heavy to be towed
  }

  // DONE: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Car class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing capacity: ${this.towingCapacity} lbs`);

    // Print details of the wheels
    console.log(
        `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
        `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
        `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
        `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }
    // DONE: The method should call the printDetails method of the parent class
    // DONE: The method should log the details of the Truck
    // DONE: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
}

// Export the Truck class as the default export
export default Truck;
