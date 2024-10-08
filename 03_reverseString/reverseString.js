/* This was my o.g solution. but im repeating after seeing solution is way different
const reverseString = function(inputString) {
    let reversedString = "";
    for (let i = inputString.length; i >= 0; i--){
        reversedString += inputString.charAt(i);
    }
    return reversedString;
};
*/
const reverseString = function(inputString) {
    return inputString.split("").reverse().join("");
}
// Do not edit below this line
module.exports = reverseString;
