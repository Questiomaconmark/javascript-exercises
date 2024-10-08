const repeatString = function(inputString, numOfRepeats) {
    let finalString = "";
    for (let i = 0; i < numOfRepeats; i++){
        finalString = finalString + inputString;
    }
    if (numOfRepeats < 0){
        return finalString = "ERROR";
    }
    return finalString;

};

// Do not edit below this line
module.exports = repeatString;
