
const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter number"));


for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
    }

    console.log(pattern);
}