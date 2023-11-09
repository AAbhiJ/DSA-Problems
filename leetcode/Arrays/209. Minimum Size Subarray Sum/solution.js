/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * TC : O(n)
 * SP : O(1)
 */
var minSubArrayLen = function(target, nums) {
    let p1 = 0;
    let curSum = 0, minSub = Math.min();
    // while(p2 < nums.length){
    //     if(target > curSum+nums[p2]){
    //         curSum = curSum+nums[p2];
    //         p2++;
    //     }else{
            
    //         minSub = Math.min(minSub, p2-p1+1);
    //         curSum-=nums[p1];
    //         p1++;
    //     }
    // }
    for(let p2 = 0; p2 < nums.length; p2++){
        curSum = curSum+nums[p2];
        while(curSum >= target){
            minSub = Math.min(minSub, p2-p1+1);
            curSum-=nums[p1++];
        }
    }
    return minSub !== Math.min() ? minSub : 0;
};