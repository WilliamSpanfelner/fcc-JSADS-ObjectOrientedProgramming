// Define a Constructor Function

// New objects are created with Constructor Functions

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

/* Constructors have capitalized names, use the keyword this
to set properties of the object they create, and define 
properties instead of returning values. */

/* Create a constructor, Dog, with properties name, color, and 
numLegs that are set to a string, a string, and a number, respectively.*/

function Dog() {
    this.name = "Mayo";
    this.color = "brown";
    this.numLegs = 4;
}

const dog = new Dog();
console.log("My favourite dog is " + dog.name + ".");