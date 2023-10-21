/**
 * @param {number} num
 * @return {number}
 * Time Complexity : O(logN) - As we with each step the number will get in half
 * Space Complexity : O(1) - As we are not creating any additional data structure, only a variable is created
 * 
 */

/** Mod Operator */
var numberOfSteps = function (num) {
    let stepsCount = 0;
    while (num > 0) {
        stepsCount++;
        if (num % 2 === 0) num /= 2;
        else num -= 1;
    }
    return stepsCount;
};

/** Bitwise Operator */
var numberOfSteps = function (num) {
    let stepsCount = 0;
    while (num > 0) {
        stepsCount++;
        if ((num & 1) == 0) num >>= 2;
        else num -= 1;
    }
    return stepsCount;
};