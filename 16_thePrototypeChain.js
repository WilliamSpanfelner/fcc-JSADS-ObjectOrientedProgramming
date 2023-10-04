// Understand the Prototype Chain

/* All objects have a prototype and an object's prototype 
itself is an object. */
function Bird(name) {
    this.name = name;
}

console.log(typeof Bird.prototype);  // object
