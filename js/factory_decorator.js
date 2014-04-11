/* 
 * Author: David Garcia
 * Github: github.com/dg253
 * Date Created: Thursday April 10, 2014 @ 11:14am
 * JS Design Patterns - Factory & Decorator
 */

/*
 * Code structure from Addy Osmani book "Learning JavaScript Design Patterns"
 * Link to book: http://addyosmani.com/resources/essentialjsdesignpatterns/book/
 */

// A constructor for defining new cars
function Car( options ) {
  this.make = options.make || "ferrari"
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "red";
  this.horsepower = options.horsepower || 500;
  this.cost = function () { return options.cost; };
 
}

// A constructor for defining new trucks
function Truck( options ){
  this.make = optins.make || "ford";
  this.state = options.state || "new";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
  this.horsepower = options.horsepower || 300;
  this.cost = function () { return options.cost || 300000; };
}

//Decorator 1 - 20inch Alloy rim upgrade 
function rimupgrade(car) {
  var v = car.cost();
  car.cost = function() {
    return v + 1000;
  };
}

//Decorator 2 - Leather Seats upgrade 
function leatherSeats(car) {
  var v = car.cost();
  car.cost = function() {
    return v + 400;
  };
}

//Decorator 3 - Engine upgrade
function engineUpgrade(car) {
  var v = car.cost();
  car.cost = function() {
    return v + 10000;
  };
}
// Define a skeleton vehicle factory
function VehicleFactory() {}

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car. 1st prototype
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
            horsepower: 280,
            cost: 40000} );


// Outputs: true
console.log( car instanceof Car );

// Outputs: Car object of color: "white", doors: 2, horsepower: 280...
console.log( car );