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