function printArray(arr) {
    console.log(arr);
}

function numbers(callback) {
    let num = [10, 20, 30, 40, 50];
    callback(num);
}

numbers(printArray);