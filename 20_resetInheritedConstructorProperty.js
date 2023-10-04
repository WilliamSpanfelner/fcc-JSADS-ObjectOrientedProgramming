// Reset an Inherited Constructor Property
function Animal() {}
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
console.log(duck.constructor);  // ƒ Animal() {}
/* duck is an instance of Bird meaning that to show its
value must be set manually */
Bird.prototype.constructor = Bird;
console.log(duck.constructor);  // ƒ Bird() {}

/* Fix the code so duck.constructor and beagle.constructor 
return their respective constructors. */
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);  // ƒ Bird() {}
console.log(beagle.constructor);  // ƒ Dog() {}