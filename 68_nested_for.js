let odd = 1;

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += odd + " ";
        odd += 2;
    }

    console.log(pattern);
}