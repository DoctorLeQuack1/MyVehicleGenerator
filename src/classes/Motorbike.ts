// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// DONE: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // DONE: Declare properties of the Motorbike class
  // DONE: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // DONE: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
    public vin : string;
    public color: string;
    public make : string;
    public model : string;
    public year : number;
    public weight: number;
    public topSpeed : number;
    public wheels : Wheel[];

  // DONE: Create a constructor that accepts the properties of the Motorbike class
    // DONE: The constructor should call the constructor of the parent class, Vehicle
    // DONE: The constructor should initialize the properties of the Motorbike class
    // DONE: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    constructor(vin:string, color:string, make:string, model:string, year:number, weight:number, topSpeed:number, wheels:Wheel[]) {
        super();
        this.vin = vin ;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.wheels = wheels;
        this.topSpeed = topSpeed;

        if (wheels.length !== 2) {
            this.wheels = [];
            for (let i : number = 0; i < 2; i++) {
                this.wheels.push(new Wheel());
            }
        }
    }

  // DONE: Implement the wheelie method
    // DONE: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie () : void {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }


  // DONE: Override the printDetails method from the Vehicle class
  // DONE: The method should call the printDetails method of the parent class
  // DONE: The method should log the details of the Motorbike
  // DONE: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    override printDetails() :void {
        super.printDetails();
        console.log(`Vehicle VIN: ${this.vin}.
Vehicle make: ${this.make}.
Vehicle model: ${this.model}.
Vehicle year: ${this.year}.
Vehicle weight: ${this.weight} lbs.
Vehicle top speed: ${this.topSpeed} mph.
Vehicle color: ${this.color}.`);
        console.log(
            `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
        );
        console.log(
            `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
        );
    }
}

// Export the Motorbike class as the default export
export default Motorbike;
