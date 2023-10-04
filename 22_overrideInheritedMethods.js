// Override Inherited Methods
/* Overriding an inherited method is done by using the 
same method name on the child object as in the parent. */
function Animal() {}
Animal.prototype.eat = function() {
    return "nom nom nom";
};
function Bird() {}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.eat = function() {
    return "peck peck peck";
}

let duck = new Bird();
console.log(duck.eat());  // peck peck peck