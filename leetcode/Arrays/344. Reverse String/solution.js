/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Used Two Pointer Approach
 * TC : O(N) - N -> is length of s
 * SC : O(1)
 */
var reverseString = function(s) {
    let start = 0, end = s.length-1;
    while(start < end){
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
};