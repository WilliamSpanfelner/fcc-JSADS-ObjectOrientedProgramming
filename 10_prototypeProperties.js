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
