/* 
 * Author: David Garcia
 * Github: github.com/dg253
 * Date Created: Thursday April 10, 2014 @ 11:14am
 * JS Design Patterns
 */
 
// A constructor for defining new cars
function Car( options ) {
  this.make = optins.make || "ferrari"
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "red";
  this.horsepower = options.horsepower || 500;
 
}

// A constructor for defining new trucks
function Truck( options ){
  this.make = optins.make || "ford";
  this.state = options.state || "new";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
  this.horsepower = options.horsepower || 300;
}

 
// Define a skeleton vehicle factory
function VehicleFactory() {}
 
// Define the prototypes and utilities for this factory
 
// Our default vehicleClass is Car. 1st prototype function
VehicleFactory.prototype.vehicleClass = Car;
 
// Our Factory method for creating new Vehicle instances. 2nd prototype function
VehicleFactory.prototype.createVehicle = function ( options ) {
 
  switch(options.vehicleType){
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
    //defaults to VehicleFactory.prototype.vehicleClass (Car)
  }
 
  return new this.vehicleClass( options );
 
};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
            vehicleType: "car",
            make: "infiniti,",
            doors: 2,
            state: "used",
            color: "white",
            horsepower: 280} );
 
 
// Outputs: true
console.log( car instanceof Car );
 
// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );