/**
 * @param {string[]} strs
 * @return {string}
 */
/** My Approach 
 * Time Complexity : O(N * max(M))
 * Space Complexity : O(1)
 * 
*/
var longestCommonPrefix = function(strs) {
    let N = strs.length,
        res = "";
    let i=0;
    while(true){
        if(strs[0].length <= i)return res;//return empty string
        const curChar = strs[0][i];
        for(let j=0;j<N;j++){
            if(strs[j].length <= i || strs[j][i]!==curChar) return res; //return empty string
        }
        res+=curChar;
        i++;
    }
    return res;
};

/**
 * @param {string[]} strs
 * @return {string}
 * Time Complexity : O(N)
 * Space Complexity : O(1)
 */
/** Editorial Approach */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return "";

    let prefix = strs[0];

    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substr(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};
