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