//* Create a variable called x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50.

// Create a variable for the sum, difference, product, quotient and remainder of x and y. Log the output in a string that shows the two numbers of x and y along with the operator and result.

// You can log the output string directly or put them in separate variables and log them like below.

// You can use string concatenation or template literals for the output.

let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

let add = `${x} + ${y} = ${x + y}`
let sub = `${x} - ${y} = ${x - y}`
let mult = `${x} * ${y} = ${x * y}`
let div = `${x} / ${y} = ${(x / y)}`
let exp = `${x} ^ ${y} = ${x % y}`


console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
console.log(exp);