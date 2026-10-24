// this is a comment
// 1) creation / declaration; 2) assignment

// three ways how to declare a variable

// 1.

var x;
var y;
var z;

console.log("x = " + x);

// 2.

let a;
let b = 50;
console.log("b = " + b);

// 3. (assignment is mandatory)
k = 10;

// -------------------------------------------------

// constants (use as many constants as possible)

const f = 60; // integer

// -------------------------------------------------
// 1) Camel notation: thisIsVariable (Java, Js, .NET)
// 2) Snake notation: this_is_variable (Python, most of scripting languages)
// 3) Yelling snake: THIS_IS_CONSTANT (Java)


let amountOfTea = 0.5; // float

// Java:
// double amountOfTea = 0.5;

// Data Types
// 1. Integer -19, 0, 78
// 2. Float / Double -19.1 , 0.5, 0.0, 3.1415
// 3. String "Hello!" or 'Hello!' (for some lang. string >> "", char >> ''). "" << zero-size / empty
// 4. Boolean. True / False
// 5. object type. DateTime

const truth = true;

const str = "My string";

// IMPORTANT! DON'T DO THIS
let myDish = "soup";
myDish = 42;
