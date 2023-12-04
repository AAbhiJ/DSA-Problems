/**
 * @param {string} num
 * @return {string}
 * 
 * TC : O(n)
 * SC : O(1)
 * 
 */
var largestGoodInteger = function (num) {
    let maxDigit = -1;
    for(let i = 0; i <= num.length-3; i++){
        if(num[i]===num[i+1] && num[i]===num[i+2]){
            maxDigit = Math.max(maxDigit, Number(num[i]));
        }
    }
 
    return maxDigit === -1 ? "" : `${maxDigit}${maxDigit}${maxDigit}`;
 
 };
 