const removeFromArray = function(inputArray, ...itemToRemove) {
    for (let removeCount = 0; removeCount < itemToRemove.length; removeCount++){
        let currentItemToRemove = itemToRemove[removeCount]
        for(let inputCount =0; inputCount < inputArray.length; inputCount++){
            let currentItemFromInput = inputArray[inputCount]
            if(currentItemFromInput === currentItemToRemove){
                inputArray.splice(inputArray.indexOf(currentItemFromInput),1);
                inputCount = 0;
            }
        }
    }
    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
