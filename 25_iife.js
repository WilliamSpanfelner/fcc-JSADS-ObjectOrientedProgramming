/* Understand the Immediately Invoked Function 
Expression (IIFE) */

/* A common pattern in JavaScript is to execute a function
as soon as it is declared: */
(function() {
    console.log("Chirp, chirp!");
})();  // Chirp, chirp!

/* This pattern is known as an immediately invoked 
function expression or IIFE  */

/* Rewrite the function makeNest and remove its call so 
instead it's an anonymous immediately invoked function 
expression (IIFE).  */
function makeNest() {
    console.log("A cozy nest is ready");
}

makeNest();