function grade(result) {
    console.log(result);
}

function checkMarks(marks, callback) {
    if (marks >= 35) {
        callback("Pass");
    } else {
        callback("Fail");
    }
}

checkMarks(75, grade);