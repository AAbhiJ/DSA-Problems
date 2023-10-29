/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Time Complexity : O(N)
 * Space Complexity : O(1)
 * 
 *  Three Pointer Approach
 * 
 */

var thirdMax = function(nums) {
    let firstMax, secondMax, thirdMax;
    for(let i = 0; i < nums.length; i++){
        let current = nums[i];
        if((thirdMax === undefined || current > thirdMax) && current < secondMax){
            thirdMax = current;
        }

        if((secondMax === undefined || current > secondMax) && current < firstMax){
            thirdMax = secondMax;
            secondMax = current; 
        }
        
        if(firstMax === undefined || current > firstMax){
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = current
        }
        
    }
    
    if(thirdMax === null || thirdMax === undefined)return firstMax;
    return thirdMax;
    
};