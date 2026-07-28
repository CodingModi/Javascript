function display(answer) {
    console.log("Answer =", answer);
}

function subtract(a, b, callback) {
    let result = a - b;
    callback(result);
}

subtract(50, 20, display);