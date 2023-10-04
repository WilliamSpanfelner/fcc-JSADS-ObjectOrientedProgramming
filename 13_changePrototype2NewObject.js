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
