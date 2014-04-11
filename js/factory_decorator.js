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
  this.cost = options.cost;
  
  this.getCost = function(){
  	return this.cost;
  }
 
}

// A constructor for defining new trucks
function Truck( options ){
  this.make = optins.make || "ford";
  this.state = options.state || "new";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
  this.horsepower = options.horsepower || 300;
  this.cost = options.cost;
}

//Decorator 1 - 20inch Alloy rim upgrade 
function rimUpgrade(car) {
  var v = car.getCost();
  car.getCost = function() {
    return v + 5000;
  };
}

//Decorator 2 - Leather Seats upgrade 
function leatherSeats(car) {
  var v = car.getCost();
  car.getCost = function() {
    return v + 400;
  };
}

//Decorator 3 - Engine upgrade
function engineUpgrade(car) {
  var v = car.getCost();
  car.getCost = function() {
    return v + 20000;
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

//Outputs: Current Car cost 40,000
console.log("Base cost is: " + car.getCost());


// Outputs: Car cost of 40,000 + Rim upgrade cost 5,000 = 45,000
rimUpgrade(car);
console.log("Added rims. Cost is now: " + car.getCost());

//Outputs: Current Car cost 45,000 + leather seat costs 400 = 45,400 
leatherSeats(car);
console.log("Added leather seats. Cost is now: " + car.getCost());