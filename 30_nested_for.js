const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter number"));

for (let i = 1; i <= n; i++) {
    let pattern = "";


    for (let j = 1; j <= n - i; j++) {
        pattern += " ";
    }

    
    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += "*";
    }

    console.log(pattern);
}