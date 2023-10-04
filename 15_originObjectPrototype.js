// Understand Where an Object’s Prototype Comes From

/* An object inherits a prototype directly from the 
constructor that created it. */

function Bird(name) {
    this.name = name;
}

let duck = new Bird("Daffy");

/* Show the relationship between duck and Bird constructor
as follows: */
console.log(Bird.prototype.isPrototypeOf(duck));  // true