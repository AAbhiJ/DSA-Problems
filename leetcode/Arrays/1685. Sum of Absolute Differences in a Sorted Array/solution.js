/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * TC : O(n)
 * SC : O(1)
 * 
 */
var getSumAbsoluteDifferences = function(nums) {
    let answer = [];
    let totalSum = 0;
    let leftSum = 0;
    let n = nums.length;
    for(let i = 0; i < n; i++){
        totalSum+=nums[i];
    }

    for(let i = 0; i < n; i++){
        let rightSum = totalSum-leftSum-nums[i];
        let leftTotal = (nums[i]*i) - leftSum;
        let rightTotal = rightSum - (nums[i]*(n-i-1));
        answer.push(leftTotal+rightTotal);
        leftSum += nums[i];
    }
    return answer;
};