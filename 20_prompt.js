const prompt = require('prompt-sync')();

let a = Number(prompt("Enter the first number: "));
let b = Number(prompt("Enter the second number: "));


console.log("a && b:", a && b);
console.log("a || b:", a || b);
console.log("!a:", !a);
