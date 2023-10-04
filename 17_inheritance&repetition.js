// Use Inheritance So You Don't Repeat Yourself
// Don't Repeat Yourself (DRY)
/* Consider how the following objects share the same 
for the describe property value. */
function Bird(name) {
    this.name = name;
}

function Dog(name) {
    this.name = name;
}

Bird.prototype = {
    constructor: Bird,
    describe: function() {
      console.log("My name is " + this.name);
    }
};
  
Dog.prototype = {
    constructor: Dog,
    describe: function() {
        console.log("My name is " + this.name);
    }
};
  
/* The repitition of the describe method can be eliminated
through the definition of a supertype */

function Animal() {};

Animal.prototype = {
    describe: function() {
        console.log("My name is " + this.name);
    }
};

// Now the describe method can be removed from the prototypes
Bird.prototype = {
    constructor: Bird
};
  
Dog.prototype = {
    constructor: Dog
};

/* The eat method is repeated in both Cat and Bear. Edit 
the code in the spirit of DRY by moving the eat method to 
the Animal supertype. */
function Cat(name) {
    this.name = name;
}
  
Cat.prototype = {
    constructor: Cat,
};
  
function Bear(name) {
    this.name = name;
}
  
Bear.prototype = {
    constructor: Bear
};
  
function Animal() { }
  
Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};