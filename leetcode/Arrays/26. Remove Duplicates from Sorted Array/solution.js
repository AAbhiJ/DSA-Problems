/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity : O(N) - N is size of nums array
 * Space Complexity : O(1) - not using any extra data structure
 */
var removeDuplicates = function (nums) {
  let cur = 0;
  for(let i = 0; i< nums.length; i++){
      if(nums[i] != nums[cur]){
          cur++;
          nums[cur] = nums[i];
      }
  }
return cur+1;
};