/* Use a Mixin to Add Common Behavior Between 
Unrelated Objects  */
/* A mixin allows other objects to use a collection 
of functions. */
let flyMixin = function(obj) {
    obj.fly = function() {
        console.log("Flying, wooosh!");
    }
};

let bird = {
    name: "Fred",
    numLegs: 2
};

let plane = {
    model: "777",
    numPassengers: 524
};

/* Passing bird and plane into the flying mixin will mean
they will both have the ability to fly. */
flyMixin(bird);
flyMixin(plane);

bird.fly();  // Flying, wooosh!
plane.fly();  // Flying, wooosh!

/* Create a mixin named glideMixin that defines a method 
named glide. Then use the glideMixin to give both bird 
and boat the ability to glide. */
let boat = {
    name: "Warrior",
    type: "race-boat"
};
  
// Only change code below this line