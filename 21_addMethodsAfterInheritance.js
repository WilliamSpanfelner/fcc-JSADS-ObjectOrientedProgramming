// Add Methods After Inheritance
/* A constructor function that inherits its prototype object from a 
supertype constructor function can still have its own methods in
addition to inherited methods. */

function Animal() {}
Animal.prototype.eat = function() {
    console.log("nom nom nom");
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// To add a behaviour unique to Bird objects:
Bird.prototype.fly = function() {
    console.log("I'm flying!");
};

let duck = new Bird();
duck.eat();  // nom nom nom
duck.fly();  // I'm flying!