// Extend Constructors to Receive Arguments

/* The Bird constructor can be modified to assign values
to properties at the time of creation */

function Bird(name, color) {
    this.name = name;
    this.color  = color;
    this.numLegs = 2;
}

// Now pass in arguments to create a new bird.
let cardinal = new Bird("Bruce", "red");
console.log(cardinal.name, cardinal.color, cardinal.numLegs);
