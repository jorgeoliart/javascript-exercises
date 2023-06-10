const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let outputTest = "";
    for (let i = 0; i < num; i++) {
        outputTest += string;
    }
    return outputTest;
};

// Do not edit below this line
module.exports = repeatString;
