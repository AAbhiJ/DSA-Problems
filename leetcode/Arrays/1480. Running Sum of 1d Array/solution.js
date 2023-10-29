/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Time Complexity : O(N) - As we are only iterating whole Array once (N - nums.length)
 * Space Complexity : O(1) - As we are not using additional variable or array
 * 
 */
var runningSum = function(nums) {
    
    for(let i = 1;i < nums.length;i++){
        nums[i] = nums[i]+nums[i-1];
    }
    return nums;

};