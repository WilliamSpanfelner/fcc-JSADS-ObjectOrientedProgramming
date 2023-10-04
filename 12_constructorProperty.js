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

// The constructor property might be used as follows:
function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
        return true;
    } else {
        return false;
    }
}

console.log(joinBirdFraternity(duck));  // true
console.log(joinBirdFraternity(beagle));  // false

/* The constructor property can be overwritten meaning 
that it is safer to use instanceof to check the object type. */

/* Write a joinDogFraternity function that takes a candidate 
parameter and, using the constructor property, return true if the 
candidate is a Dog, otherwise return false. */

// Only change code below this line
function joinDogFraternity(candidate) {

}