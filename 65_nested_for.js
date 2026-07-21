for (let i = 65; i <= 69; i++) {
    let pattern = "";

    for (let j = 65; j <= i; j++) {
        pattern += String.fromCharCode(j) + " ";
    }

    console.log(pattern);
}