// Callback function
function showResult(result) {
    console.log("Result =", result);
}

// Main function
function add(a, b, callback) {
    let sum = a + b;
    callback(sum); // Send result to callback
}

add(10, 20, showResult);