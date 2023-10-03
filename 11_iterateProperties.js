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

console.log(ownProps);
console.log(prototypeProps);
