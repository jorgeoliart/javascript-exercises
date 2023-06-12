const sumAll = function(num1, num2) {
    // declare variable for final sum
    let finalSum = 0;

    // condition: the first number is the lowest
    if (num1 < num2) {
        // include both num1 and num2 in the loop
        for (i = num1; i <= num2; i++ ) {
            // add the iterated value tu the final sum
            sumAll = sumAll + i;
        }
    
    // condition: the second number is the lowest
    } else if (num2 < num1) {
        // include both num2 and num1 in the loop
        for (i = num2; i <= num1; i++) {
            // add the iterated value to the final sum
            sumAll = sumAll + i;
        } 
    }
    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
