// functions, methods

// input arguments
//declaration of the function
function sum(a, b) {
    // body of the function
    const calculateSum = a + b;
    return calculateSum;
}

const mySum = sum(5, 7);
console.log(mySum);

// return several values

function calc(a, b) {
    const v1 = a + b;
    const v2 = a * b;
    return {v1, v2};
}

const c = calc(10, 20);
console.log(c.v1, c.v2);





