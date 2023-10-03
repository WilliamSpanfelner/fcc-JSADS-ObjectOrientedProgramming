// Verify an Object's Constructor with instanceof

/*instanceof returns a boolean indicating whether or not
an instance was created with a constructor. */

let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

console.log(crow instanceof Bird);  // true

let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
}

console.log(canary instanceof Bird);  // false

/* Create a new instance of the House constructor, calling 
it myHouse and passing a number of bedrooms. Then, use 
instanceof to verify that it is an instance of House. */
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
  
// Only change code below this line
let myHouse = new House(5);
console.log(myHouse instanceof House);