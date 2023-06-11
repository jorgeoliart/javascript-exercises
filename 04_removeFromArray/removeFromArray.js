/*const removeFromArray = function(array, num, num2) {
    for (let element of array) {
        if (element === num || element === num2) {
            let index = array.indexOf(element);
            array.splice(index, 1);
        }
    }
    return array;
};*/

const removeFromArray = function(array, ...removableElements) {
    // make a first loop that interates through the removable args
    for (let elementRemove of removableElements) {
        // make a second loop that iterates through the array
        // count backwards to avoid altering the indexes in the array
        for (let j = array.length - 1; j >= 0; j--)  {
            if (array[j] === elementRemove) {
                array.splice(j, 1);
            }
        }
    }
    return array;
   
}
// Do not edit below this line
module.exports = removeFromArray;
