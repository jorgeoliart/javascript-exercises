const sumAll = function(num1, num2) {
    // declare variable for final sum
    let finalSum = 0;

    // condition: both arguments are positive integers
    // another condition: both arguments are numbers
    if ((num1 > 0 && num2 > 0) && (typeof num1 == "number" && typeof num2 == "number"))  {
        // condition: the first number is the lowest
        if (num1 < num2) {
        // include both num1 and num2 in the loop
            for (i = num1; i <= num2; i++ ) {
                // add the iterated value tu the final sum
                finalSum = finalSum + i;
            }
        } else if (num2 < num1) {
            for (i = num2; i <= num1; i++) {
                //add the iterated value to the final sum
                finalSum = finalSum +i;
            }
        }
    } else {
        // error message when having at least one negative number as argument
        return "ERROR";
    }
    return finalSum;
}
    
    
    // condition: the second number is the lowest
/*    } else if (num2 < num1) {
        // include both num2 and num1 in the loop
        for (i = num2; i <= num1; i++) {
            // add the iterated value to the final sum
            finalSum =  finalSum + i;
        } 
    }
    return finalSum;

}; */

// Do not edit below this line
module.exports = sumAll;
