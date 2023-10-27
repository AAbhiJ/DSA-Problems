/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Time Complexity : O(N)
 * Space Complexity : O(1)
 * 
 * We have used two pointer approach, and utilized information such as writter next position (if it was on zero element),
 * will be zero position.
 * 
 * 
 */
var moveZeroes = function(nums) {
  let reader = 0, writter = 0;
   let n = nums.length;
   while(reader < n){
       if(nums[reader]!==0 && nums[writter]===0){
           nums[writter] = nums[reader];
           nums[reader] = 0;
       }
       if(nums[writter]!==0)writter++;
       reader++;
   }
   
};