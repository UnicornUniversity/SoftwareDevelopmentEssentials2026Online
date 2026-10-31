// list, collection, array, vector, set
// a list contains items
const ages = [17, 56, 25, 45, 100];
const names = ["John", "Mary", "George", "Max", "Juliet"];

console.log(names);
console.log(names.toString());

// index instead of ordinal number of an item
// index is 0-based: 0, 1, 2....
console.log("Item # 3 = " + names[2]);
console.log("Item # -1 = " + names[-1]);
console.log("Item # 5 = " + names[5]);

/*
names[5].toString() >> compare it with John
    undefined >> "undefined" != "manager" {.........}

*/

console.log("# of items = " + names.length); //.count

// empty array
const surnames = [];

if (names.length > 0) {
    console.log("first item = " + names[0]);
    console.log("latest item = " + names[names.length - 1]);
}

// add
names.push("Cristian");
ages.push(29);

const names2 = ["Gary", "Josh", "David"];

names.push(...names2);
ages.push(...[58, 34, 75]);
console.log(names);
console.log(ages);

// loops
// i, j, k
// i++ >> i = i + 1
// ++i i++
// i-- --i
for (let i = 0; i < names.length; i++) {
    console.log("#" + (i + 1) + " " + names[i]);
}

console.log("-----------------");

for (let i = names.length - 1; i >= 0; i--) {
    console.log("#" + (i + 1) + " " + names[i]);
}

console.log("-----------------");

for (const name of names) {
    console.log(name);
}

console.log("-----------------");

let index = 0;
while (index < names.length) {
    console.log("#" + (index + 1) + " " + names[index]);
    index++; // aware! if you use "continue", be sure you increased it before you go
}

console.log("-----------------");

let index2 = 100;
do {
    console.log("#" + (index2 + 1) + " " + names[index2]);
    index2++;
} while (index2 < names.length); // do-until

console.log("-----------------");
// anniversary postcards
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const age = ages[index];
    if (age % 25 === 0){
        console.log("Postcard for " + name + " (" + age + ")");
    }
}

console.log("-----------------");
// anniversary postcards
for (let index = 0; index < names.length; index++) {
    const age = ages[index];
    if (age % 25 !== 0) continue;

    const name = names[index];
    console.log("Postcard for " + name + " (" + age + ")");
}

console.log("-----------------");

let index3 = 0;
while (true) {
    if (index3 >= names.length) break;

    const name = names[index3];
    const age = ages[index3];
    if (age % 25 === 0){
        console.log("Postcard for " + name + " (" + age + ")");
    }

    index3++;
}


