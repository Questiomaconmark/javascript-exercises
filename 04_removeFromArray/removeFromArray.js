const removeFromArray = function(inputArray, ...itemToRemove) {
    // notes from glacing at solution. They dont use nested for loops to go through arrays (check array built in methods)
    //they use arrow function for shorter code
    return inputArray.filter(items => !itemToRemove.includes(items))

};

// Do not edit below this line
module.exports = removeFromArray;
