/**
 * @param {number[]} height
 * @return {number}
 * 
 * TC : O(n)
 * SC : O(1)
 * 
 */
var trap = function (height) {
    let totalWaterTrapped = 0, n = height.length;
    let left = 0, right = n-1;
    let leftMax = rightMax = Math.max();
    while(left < right){
        if(leftMax < height[left]){
            leftMax = height[left];
        }else{
            totalWaterTrapped += leftMax - height[left];
        }

        if(rightMax < height[right]){
            rightMax = height[right];
        }else{
            totalWaterTrapped += rightMax - height[right];
        }

        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return totalWaterTrapped;
};