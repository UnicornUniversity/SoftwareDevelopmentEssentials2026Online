// string as array

const s = "Hello, world!";
const s1 = ""; // empty string
const s2 = null; // special value, means nothing

console.log(s.length);
console.log(s1.length); // string of zero size
//console.log(s2.length); // not possible

// indexes as zero-based
console.log(s[4]);
console.log(s.substring(2, 5));

const s3 = "    Good morning!    ";
console.log(s3.trimStart());
console.log(s3.trimEnd());
console.log(s3.trim());

const s4 = "     ";
if (s4.length > 0) {
    // .....
}

if (s4.trim().length > 0) {
    // .....
}

// case sensitivity

const city1 = "Prague";
const city2 = "PRAGUE";

if (city1 === city2){
    console.log("they are match");
}

if (city1.toLowerCase() === city2.toLowerCase()){
    console.log("they are match");
}