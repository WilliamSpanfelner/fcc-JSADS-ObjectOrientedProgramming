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

/* Create another Dog constructor. This time, set it up to take the 
parameters name and color, and have the property numLegs fixed at 
4. Then create a new Dog saved in a variable terrier. Pass it two 
strings as arguments for the name and color properties. */

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Tez", "white");
console.log(terrier.name, terrier.color, terrier.numLegs);
