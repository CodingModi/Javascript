function result(message) {
    console.log(message);
}

function checkNumber(num, callback) {
    if (num % 2 == 0) {
        callback("Even Number");
    } else {
        callback("Odd Number");
    }
}

checkNumber(9, result);