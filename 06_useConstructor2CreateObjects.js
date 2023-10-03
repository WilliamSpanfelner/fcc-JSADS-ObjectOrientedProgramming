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

/* Use the Dog constructor from the last lesson to create a new instance 
of Dog, assigning it to a variable hound. */
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog();
  hound.name = "Mayo";
  console.log(hound.name);