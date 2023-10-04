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
