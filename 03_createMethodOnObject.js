// Create a Method on an Object

// Methods are object properties that are functions
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
};

console.log(duck.sayName());