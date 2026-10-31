// this is declaration of "a" (const a) and also we assigned the value "10" ("=" operator of assignment)
const a = 10;

// condition in the brackets
// "==" binary operator for comparison
if (a == 10) {
    console.log("a is equal 10");
}

const b = true;
if (b == true) {
    console.log("b is true");
}

// shorter
if (b) {
    console.log("b is true");
}

const c = false;
if (!c) {
    console.log("c is true");
}

const x = 1;
const y = 2;

if ((x + y > 2) && (b || c)) {
    console.log("this is true");
}

if (b) {
    console.log("good morning!");
}

if (!b) {
    console.log("good afternoon!");
}

if (b) {
    console.log("good morning!");
} else {
    console.log("good afternoon!");
}

const hourOfDay = 23;

if (hourOfDay <= 11) {
    console.log("good morning!");
} else if (hourOfDay > 11 && hourOfDay <= 16) {
    console.log("good afternoon!");
} else if (hourOfDay > 16 && hourOfDay <= 22) {
    console.log("good evening!");
} else {
    console.log("good night!");
}

const dayOfWeek = "Thursday";
switch (dayOfWeek){
    case "Monday":
        console.log("it is Monday");
        break;
    case "Tuesday":
        console.log("it is Tuesday");
        break;
    default:
        console.log("anything else");
        break;
}

/*
boolean isReportRequested;
isUserAllowedToGetReport(.....................................)

// incorrect
if (isUserAllowedToGetReport() && isReportRequested)

    // it is very fast to check isReportRequested
if (isReportRequested && isUserAllowedToGetReport())

*/

console.log("======================");
const j = "10";
if (j == 10) {
    console.log("we are here");
}

// both == and === are comparison operators
// both != and !== are comparison operators (not)
if (parseInt(j) === 10) {
    console.log("we are there");
}

if (parseInt(j) !== 11) {
    console.log("j is not 11");
}

