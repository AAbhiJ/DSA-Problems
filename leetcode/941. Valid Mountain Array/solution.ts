/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity : O(N) - N is size of nums array
 * Space Complexity : O(1) - not using any extra data structure
 */

/**
 * This is my thught solution, I was trying to do this in One loop.
 * I should focused on Time complexity and not on how many loops I should use.
 * since if I use 10 loops one after another still the time complexity is O(N). 
 * 
 */

function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false;

  let flag = true;//true = increasing, false = decreasing
  let isIncreased = false;
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
      if (arr[i] === arr[i + 1]) return false;
      if(arr[i] < arr[i + 1] )isIncreased = true;
      if (!flag && arr[i] < arr[i + 1]) return false;

      if (flag && arr[i] > arr[i + 1]) flag = false;
  }

  // if flag is true, means the arr did not decreased
  return flag || isIncreased==false ? false : true;
};