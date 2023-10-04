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

/* Add all necessary code so the Dog object inherits from 
Animal and the Dog's prototype constructor is set to Dog. 
Then add a bark() method to the Dog object so that beagle 
can both eat() and bark(). The bark() method should print 
Woof! to the console. */

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();