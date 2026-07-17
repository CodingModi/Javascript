const prompt = require('prompt-sync')();

let height = Number(prompt("Enter the height of trangle: "));
let base = Number(prompt("Enter the base of trangle:"));
let area = 0.5*height*base;


console.log(area);