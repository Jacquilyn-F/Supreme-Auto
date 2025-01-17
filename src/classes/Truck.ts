// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // The constructor accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call the constructor of the parent class, Vehicle
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    
    // Check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicleMake} ${vehicleModel}`);
    } else {
      console.log(`${vehicleMake} ${vehicleModel} is too heavy to be towed`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the printDetails method of the parent class

    // Print details of the Truck class
    console.log({
      VIN: this.vin,
      Color: this.color,
      Make: this.make,
      Model: this.model,
      Year: this.year,
      Weight: `${this.weight} lbs`,
      TopSpeed: `${this.topSpeed} mph`,
      TowingCapacity: `${this.towingCapacity} lbs`
  });;

    // Print details of the wheels
    this.wheels.forEach((wheel, index) => {
      console.log(
        `Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`
      );
    });
  }
}

// Export the Truck class as the default export
export default Truck;