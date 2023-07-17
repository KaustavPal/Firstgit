 
 // Function Statement aka Function Declaration 
function a() {
    console.log("a called");
}
a();
/*A normal function that we create using Naming convention. & By this we can do the Hoisting.*/

 // Function Expression
let b = function () {
    console.log("b called");
}
b();
/*Different between function statement and function expression -> Main difference is how these 
two function is hoisted. if we called a() and b() before even creating the functions then a()
will give the correct output but b() will throw error. During the hoisting phase in the memory 
creation phase a() is created a memory and the function is assigned to a(). but in case of b()
because b() is a function expression. let b will be created like any other variable. So it is
assigne undefined untill the code hits the line -> let b = function(){console.log("b called")}
So when the JavaScript engine execute the codde line by line and it reaches th line->
let b = function(){console.log("b called")} then only the function is assigned to the variable
b. Until then it is undefined because of that we can't call that b() before creating it.*/


 // Anonumous Function 
 function () {

 }
 /*A function without a name. this type of function dosen't have their own
 identity. So we can't just call this type of function like named function. it will give an
 error. Anonumous functions are used in places where functions are used as values. We can
 assign this type of functions to a variable but in function statement anonumous functions
 can't be used. */


 // Named Function Expression
 let c = function xyz() {
    console.log("c called");
}
c();
/*A function with a name is known as Named Function Expression*/
//xyz(); -> 
/*Here if we call this, it will five an error that "xyz is not defined". Here xyz is not 
created in outer scope / global scope because we are assigning it to a variable. So it is
created as a local variable*/


 // Difference between Parameters & Arguments ? 
 let d = function (param1, param2) {
    console.log("d called");
}
d(1, 2);
 /*Here param1 and param2 both are parameters and 1, 2 both are arguments. Parameters are
 the identifiers we put in the local scope. this identifiers or labels are the local variable 
 in function scope. which we can't access from outside. So the values we pass inside a function
 are arguments and the labels or identifiers which get those values known as parameters*/

 // First Class Function
 let e = function (param1) {
    console.log(param1);
 }
 e(function () {

 });
//or
let f = function (param1) {
    console.log(param1);
 }
 function xyz() {

 }

 f(xyz);
 //or
let g = function(param1) {
    return function () {

    }
}
console.log(g());
//or
let h = function(param1) {
    return function xyz() {

    }
}
console.log(h());
/* The ability to use functions  as values and can be passed as an argument inside a function and
can be returned from an function is known as first class function*/
//First Class Citizens -> It means First Class Function
/*The ability to use functions  as values and can be passed as an argument inside a function and
can be returned from an function all this things makes functions in JavaScrips as 
First Class Citizens*/

 // Arrow Functions