const leapYears = function(inputYear) {
    let leapOrNotLeap;
    if (((inputYear % 4 === 0) && (inputYear % 100 != 0)) || (inputYear % 400 === 0)) {
        leapOrNotLeap = true;
    } else {
        leapOrNotLeap = false;
    }
    return leapOrNotLeap;

};

// Do not edit below this line
module.exports = leapYears;
