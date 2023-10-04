// Understand the Prototype Chain

/* All objects have a prototype and an object's prototype 
itself is an object. */
function Bird(name) {
    this.name = name;
}

console.log(typeof Bird.prototype);  // object

console.log(Object.prototype.isPrototypeOf(Bird.prototype));  // true

// Let's illustrate the prototype chain:
let duck = new Bird("Daffy");
console.log(duck.hasOwnProperty("name"));  // true

// hasOwnProperty is defined in Object.prototype;
// Bird.prototype has access to Object.prototype;
// duck has access to Bird.prototype;
// Bird is the supertype for the subtype duck;
// Object is the supertype for Bird and duck;
// Object is a supertype of all object in JavaScript; 