const prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;
let exp = num1 ** num2;

console.log("Sum =", sum);
console.log("Subtraction =", sub);
console.log("Multiplication =", mul);
console.log("Division =", div);
console.log("Modulus =", mod);
console.log("Exponentiation =", exp);