// Use a Constructor to Create Objects

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

// Use the new keyword to create a new object instance

let blueBird = new Bird();

console.log(blueBird.name, blueBird.color, blueBird.numLegs);

// Modify values like so:
blueBird.name = "Fred";
console.log(blueBird.name);