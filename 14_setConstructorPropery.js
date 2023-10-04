/* Remember to Set the Constructor Property when Changing 
the Prototype */
function Bird(name) {
    this.name = name;
}

function Cartoon(name) {
    this.name = name;
}

Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

let duck = Bird("Daffy");
// duck.constructor = Cartoon;  // TypeError: Cannot read properties of undefined

// console.log(duck.constructor === Bird);
// console.log(duck.constructor === Cartoon);

// Define the constructor property on the Dog prototype.
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
