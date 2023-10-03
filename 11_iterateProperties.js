// Iterate Over All Properties

/* Own properties are defined directly on the object 
instance itself. And prototype properties are defined 
on the prototype. */

function Bird(name) {
    this.name = name;
}

Bird.prototype.numLegs = 2;

let duck = new Bird("Donald");

// Now create ownProps and prototypeProps arrays:
let ownProps = [];
let prototypeProps = [];

for (const property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);  // ['name']
console.log(prototypeProps);  // ['numLegs']

/* Add all of the own properties of beagle to the array ownProps. 
Add all of the prototype properties of Dog to the array 
prototypeProps. */

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

ownProps = [];
prototypeProps = [];

// Only change code below this line
for (const property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps, "\n", prototypeProps)  // ['name'] ['numLegs']

