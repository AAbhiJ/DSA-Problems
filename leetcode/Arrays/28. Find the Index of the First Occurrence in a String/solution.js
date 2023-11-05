/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Time Complexity : O(N*M)
 * Space Complexity : O(1) // Not considered returned result array
 */
/** Approach 1 : (My logic) */
var strStr = function(haystack, needle) {
    const N = haystack.length;
    const M = needle.length;
    if(N < 1 || M < 1)return "";
    for(let i = 0;i<N; i++){
        if(haystack[i]==needle[0] && haystack.slice(i,M+i) == needle){
            return i;
        }
    }
    return -1;
};

/** Approach 1 : (Editorial logic) */
var strStr = function(haystack, needle) {
    let m = needle.length;
    let n = haystack.length;

    for (let windowStart = 0; windowStart <= n - m; windowStart++) {
        for (let i = 0; i < m; i++) {
            if (needle[i] != haystack[windowStart + i]) {
                break;
            }
            if (i == m - 1) {
                return windowStart;
            }
        }
    }

    return -1;
};

/**
 *  Diff Between Editorial and My Logic
 *  1) Outer loop only looped till the remaining haystack length is greater than needle length
 *     which reduced the loops.
 *  2) Use of if condition in inner loop to break if elements not matching, which is a nice way.
 *     I would have checked the condition first, then started the loop
 * 
 */