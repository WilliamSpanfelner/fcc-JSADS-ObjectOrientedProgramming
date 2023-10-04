// Understand the Constructor Property
/* The constructor property is a reference to the constructor
function that created the instance.  The constructor 
property can determine what kind of object it is. */

function Bird(name) {
    this.name = name;
}

function Dog(name) {
    this.name = name;
}

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  // true
console.log(beagle.constructor === Dog);  // true

