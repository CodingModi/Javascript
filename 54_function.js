// Store an anonymous function in the variable 'checkEven'
let checkEven = function(num) {

    // Check whether the number is even
    if (num % 2 == 0) {

        // Return Even
        return "Even";

    } else {

        // Return Odd
        return "Odd";

    }

};

// Print the result
console.log(checkEven(15));