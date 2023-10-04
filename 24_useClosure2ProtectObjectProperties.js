/* Use Closure to Protect Properties Within an 
Object from Being Modified Externally */

/* A function always has access to the context
in which it was created.  This is called closure in 
JavaScript */

function Bird() {
    let hatchedEgg = 10;
    this.getHatchedEggCount = function() {
        return hatchedEgg;
    };
}

let ducky = new Bird();
ducky.hatchedEgg = 20;  // attempting to set hatchedEgg to a new value has no effect.
console.log(ducky.getHatchedEggCount());  // 10

/* Change how weight is declared in the Bird function so 
it is a private variable. Then, create a method getWeight 
that returns the value of weight 15. */
function Bird() {
    this.weight = 15;
  
  
}