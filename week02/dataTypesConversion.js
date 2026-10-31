// 11 > "11"
// console.log(5 + 6); implicit conversion
console.log(5 + 6);
console.log("sum = " + (5 + 6));
console.log("sum = " + 5 + 6); // unexpectedly

// explicit conversions
const n = 100; //integer
const pi = 3.1415; //double

const s1 = n.toString();
const s2 = pi.toString();

console.log(s1 + "; " + s2);

const n1 = parseInt(s1);
const pi1 = parseFloat(s2);
const pi2 = parseInt(s2);

console.log(n1 + "; " + pi1 + "; " + pi2);

console.log("-------------------");

// AWARE! implicit conversion

console.log("1970" + 18);
console.log(parseInt("1970") + 18);
console.log(10 + "16");

console.log("1970" - 18);
console.log("1970" - "18");
console.log("1970" - "18a"); // NaN not a number

// 1. "2" --> 2
// 2. 2 --> -2
// 3. -2 --> "-2"
//4. "5" + "-2" --> "5-2"
console.log("5" + -"2");

// 1. "2" --> 2
// 2. 2 --> -2
//4. 5 - (-2) = 7
console.log("5" - -"2");















