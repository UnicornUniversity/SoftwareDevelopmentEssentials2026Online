// n = [1 .. 100]
// print them
// if n div 3 with 0 reminder >>> fizz
// if n div 5 with 0 reminder >>> buzz

for (let n = 1; n <= 100; n++) {
    let s = n.toString() + " : ";
    s += (n % 3 === 0) ? "fizz" : "";
    s += (n % 5 === 0) ? "buzz" : "";
    console.log(s);
}
