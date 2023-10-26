/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 */
/**
 * Version 1
 * Already solved at Sep 02 2023
 * In this we are doing using two pointer approach, where we keep a pointer to which position we need to replace the value (here it is 'k'), and a second pointer from which we will replace the value (here it is 'i')
 * 
 * Time Complexity : O(N) - where N is size of nums arr
 * Space Complexity : O(1)
 */
var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i< nums.length;i++){
      if(nums[i]!==val){
        nums[k++] = nums[i];
      }
    }  
    return k;
  };


/**
 * Version 2
 * However above solution is optimal in case of Time and Space Complexity, but we are doing unnessesary replace if the k and i are incrementing parallally with same position till found the val. 
 * In this approach we will still use two pointer approach, but we will keep a pointer at end ('k'). and if found a val matching position we will replace the matching position with 'k' position. 
 * This will reduce the replace operation
 */
var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i< nums.length;i++){
      if(nums[i]!==val){
        nums[k++] = nums[i];
      }
    }  
    return k;
  };