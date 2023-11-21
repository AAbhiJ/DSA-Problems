/**
 * @param {number[]} nums
 * @return {number}
 * 
 * TC : O(N)
 * SC : O(N)
 * 
 * Only i was missing in the logic that start loop when found dict[i-1] === undefined, this condition
 * 
 * 
 */
var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0;

    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] = 1;
    }
    const keys = Object.keys(dict).map(num => Number(num));
    let maxCount = 0;
    let curCount = 1;
    for (let i = 0; i < keys.length; i++) {
        if (dict[keys[i]-1] === undefined) {
            curCount = 1;
            curKey = keys[i];
            while(dict[curKey+1]){
                curCount++;
                curKey++;
            }
            maxCount = Math.max(maxCount, curCount);
        }
    }
    return Math.max(maxCount, curCount);
};