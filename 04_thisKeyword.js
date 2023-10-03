// Make Code More Reusable with the this Keyword

// Access property values using the this keyword

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
};

console.log(duck.sayName());

/* Using this way of accessing object properties means that 
the object name can change without requiring any references 
to be changed */

/* Modify the dog.sayLegs method to remove any references to dog. 
Use the duck example for guidance. */
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  console.log(dog.sayLegs());