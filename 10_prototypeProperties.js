// Use Prototype Properties to Reduce Duplicate Code
function Bird(name, color) {
    this.name = name;
    this.color = color;
}

Bird.prototype.numLegs = 2;

let duck = new Bird("Donald", "blue");
let canary = new Bird("Tweety", "yellow");
console.log(duck.numLegs);  // 2
console.log(canary.numLegs);  // 2

// Using prototype properties reduces code duplication

// Add a numLegs property to the prototype of Dog
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");

console.log(beagle.numLegs);