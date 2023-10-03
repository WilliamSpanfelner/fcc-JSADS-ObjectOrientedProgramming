// Make Code More Reusable with the this Keyword

// Access property values using the this keyword

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
};

console.log(duck.sayName());