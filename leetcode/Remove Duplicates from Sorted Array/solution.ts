/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity : O(N) - N is size of nums array
 * Space Complexity : O(1) - not using any extra data structure
 * 
 * We have used two variable to maintain greatest and replaceValue.
 * It is based on Two pointer from backward technique for inplace problems.
 * 
 */
var replaceElements = function(arr) {
  let greatest = -1, replaceValue = -1;
  const n = arr.length;
  for(let i = n-1; i >= 0; i--){
      if(arr[i]> greatest)greatest = arr[i];
      arr[i] = replaceValue;
      if(replaceValue < greatest)replaceValue = greatest;
  }
  return arr;
};