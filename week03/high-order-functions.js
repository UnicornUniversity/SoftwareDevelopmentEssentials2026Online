function inc5(n) {
    return n + 5;
}


const arr = [8, 4, 3, 1, 100];

const arrInc = [];

for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    arrInc.push(inc5(n));
}

console.log(arrInc);

// MAP

const arrIncMap = arr.map(inc5);
console.log(arrIncMap);

// FILTER (left even numbers only)
// pure function (means, depends on its arguments only)
function isEven(n) {
    return n % 2 === 0;
}

const arrEven = [];

for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (isEven(n)) {
        arrEven.push(n);
    }
}

console.log(arrEven);

const arrEvenFilter = arr.filter(isEven);
console.log(arrEvenFilter);

// predicate??
// lambda function

// what sits in filter(....) is anonymous function

const arrEvenFilter2 = arr.filter((n) => {
    return n % 2 === 0;
});
console.log(arrEvenFilter2);

// lambda equation
const arrEvenFilter3 = arr.filter((n) => n % 2 === 0);
console.log(arrEvenFilter3);

// function with side effect
arr.forEach((n) => console.log(n));

// REDUCE

// min

let minValue = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
    const v = arr[i];
    if (minValue > v) {
        minValue = v;
        minIndex = i;
    }
}

console.log("min value = " + minValue + "; index = " + minIndex);

const minValueReduce1 = arr.reduce((currentMinValue, currentValue) =>
    currentMinValue > currentValue
        ? currentValue
        : currentMinValue);

console.log("min value (reduce1) = " + minValueReduce1);

let minIndexReduce = -1;

const minValueReduce2 = arr.reduce((currentMinValue, currentValue, currentIndex) => {
    if (currentMinValue > currentValue) {
        currentMinValue = currentValue;
        minIndexReduce = currentIndex; // not so good solution because it operates with external variable
    }

    return currentMinValue;
});

console.log("min value (reduce2) = " + minValueReduce2 + "; index = " + minIndexReduce);



