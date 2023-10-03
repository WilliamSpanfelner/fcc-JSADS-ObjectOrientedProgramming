// Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

/* The properties name and numLegs are called own properties
since the instance object defines them. */

let ownProps = [];

for (const property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);  // ['name', 'numLegs']

// Add the own properties of canary to the array ownProps.
ownProps = [];

for (const property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);