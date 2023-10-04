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

/* Override the fly() method for Penguin so that it 
returns the string Alas, this is a flightless bird. */
// function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird."
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());  // Alas, this is a flightless bird.