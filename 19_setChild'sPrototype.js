// Set the Child's Prototype to an Instance of the Parent

function Animal() {};
Animal.prototype.eat = function() {
    console.log("nom nom nom");
}

function Bird(name) {
    this.name = name;
}

Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird("Daffy");
duck.eat();  // nom nom nom

/* Modify the code so that instances of Dog inherit 
from Animal. */
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line


let beagle = new Dog();