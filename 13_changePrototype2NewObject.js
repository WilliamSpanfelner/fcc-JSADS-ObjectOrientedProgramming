// Change the Prototype to a New Object
/* Adding prototype properties individually is tedious.  
Avoid the tedium by creating a prototype object */

function Bird(name) {
    this.name = name;
}

Bird.prototype = {
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
}

let roadrunner = new Bird("Road Runner");
console.log(roadrunner.numLegs);  // 2
roadrunner.eat();  // nom nom nom
roadrunner.describe();  // My name is Road Runner

/* Add the property numLegs and the two methods eat() and 
describe() to the prototype of Dog by setting the prototype 
to a new object. */

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name + ".");
    }
};

let jackRussel = new Dog("Jack");
console.log(jackRussel.numLegs);  // 4
jackRussel.eat();  // nom nom nom
jackRussel.describe();  // My name is Jack.