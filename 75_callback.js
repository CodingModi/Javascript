function print(value) {
    console.log("Multiplication =", value);
}

function multiply(a, b, callback) {
    callback(a * b);
}

multiply(5, 4, print);