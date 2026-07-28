function show(value) {
    console.log("Division =", value);
}

function divide(a, b, callback) {
    callback(a / b);
}

divide(20, 4, show);