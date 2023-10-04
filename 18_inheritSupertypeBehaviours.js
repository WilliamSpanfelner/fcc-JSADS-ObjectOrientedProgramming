// Inherit Behaviors from a Supertype

// Create a supertype
function Animal() {};
Animal.prototype.eat = function() {
    console.log("nom nom nom");
}

// Create an instance of the supertype
// let animal = new Animal();

// or

let animal = Object.create(Animal.prototype);
/* Object.create(obj) creates a new object and sets obj as
the new object's prototype */

animal.eat();  // nom nom nom
console.log(animal instanceof Animal);  // true

/* Use Object.create to make two instances of Animal 
named duck and beagle. */
Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  // Only change code below this line
  
  let duck; // Change this line
  let beagle; // Change this line