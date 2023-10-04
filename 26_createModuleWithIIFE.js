// Use an IIFE to Create a Module
/* Immediately Invoked Function Expressions can be used
to package a module like a set of mixins */
let motionModule = (function () {
    return {
        glideMixin: function(obj) {
            obj.glide = function() {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function(obj) {
            obj.fly = function() {
                console.log("Flying, wooosh!");
            };
        }
    }
})();

function Bird() {
    let hatchedEgg = 10;
    this.getHatchedEggCount = function() {
        return hatchedEgg;
    };
}

let ducky = new Bird();

motionModule.glideMixin(ducky);
ducky.glide()  // Gliding on the water

/* Create a module named funModule to wrap the two mixins 
isCuteMixin and singMixin. funModule should return 
an object. */
let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
};
let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
};