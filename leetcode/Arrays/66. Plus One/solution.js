/**
 * @param {number[]} digits
 * @return {number[]}
 * Time Complexity : O(N) 
 * Space Complexity : O(1)
 */
var plusOne = function(digits) {
  
    let n = digits.length;
    let foundIndex;
    for(let i = n-1; i >= 0; i--){
        if(digits[i]<9){
            digits[foundIndex]+=1;
            return digits;
        }
        digits[i]=0;
    }
        
    digits[0] = 1;
    digits.push(0);
    return digits;
    
};