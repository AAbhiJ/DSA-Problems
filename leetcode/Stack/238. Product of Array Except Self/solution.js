/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * TC : O(N)
 * SC : O(1)
 * 
 */
var productExceptSelf = function(nums) {
    let totalSum = 1;
    let n = nums.length;
    let result = [];
    for(let i = 0; i < n; i++){
        result[i] = totalSum;
        totalSum *= nums[i];
    }
    totalSum=1;
    for(let i = n-1; i >= 0; i--){
        result[i] *= totalSum;
        totalSum *= nums[i];
    }
    return result;
};