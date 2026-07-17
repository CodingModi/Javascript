const prompt = require('prompt-sync')();

const pi = 3.14;
let radius = Number(prompt("Enter the radius of the circle: "));
let area = pi*radius*radius;


console.log(area);