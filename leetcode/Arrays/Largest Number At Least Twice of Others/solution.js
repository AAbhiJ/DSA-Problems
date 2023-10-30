/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity : O(N)
 * Space Complexity : O(1)
 */
var dominantIndex = function(nums) {
    let largestIndex = -1, largest = -1;
    /* Find largest  */ 
    for(let i = 0; i < nums.length; i++ ){
        if(nums[i] > largest){
            largest = nums[i];
            largestIndex = i;
        } 
    }
    
    /* check with other for matching condition  */
    for(let i = 0; i < nums.length; i++){
        if(i !== largestIndex && nums[i]*2 > largest)return -1;
    }
    return largestIndex;
    
};