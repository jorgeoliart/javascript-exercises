// create the parameter for the function: a string
const reverseString = function(inputString) {
    // split a string into its characters, including blanks
    let characters = inputString.split("");
    
    // reverse the elements/characters in the array
    characters = characters.reverse();
    
    // join the reversed characters into a single string
    let reversedString = characters.join('');

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
