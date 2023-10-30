/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity : O(N) - N is size of nums array
 * Space Complexity : O(1) - not using any extra data structure
 */
var pivotIndex = function (nums) {
  let leftSum = 0,
    rightSum = 0;
  let left = 0;
  /** find total */
  while (left < nums.length) {
    rightSum += nums[left++];
  }

  left = 0;

  rightSum -= nums[left];

  while (left < nums.length && leftSum != rightSum) {
    left++;
    leftSum += nums[left - 1];
    rightSum -= nums[left];
  }

  if (leftSum === rightSum) return left;
  return -1;
};


/** Restructured */
var pivotIndex = function (nums) {
  let leftSum = 0,
    rightSum = 0;
  let left = 0;

  /** find total */
  while (left < nums.length) rightSum += nums[left++];

  left = 0;
  rightSum -= nums[left];

  while (left < nums.length) {
    if (leftSum === rightSum) return left;
    left++;
    leftSum += nums[left - 1];
    rightSum -= nums[left];
  }
  return -1;
};
