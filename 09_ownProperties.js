// Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

/* The properties name and numLegs are called own properties
since the instance object defines them. */

