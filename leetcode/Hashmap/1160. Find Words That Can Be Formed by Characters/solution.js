/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 *
 * TC : O(n * m + k) - n = size of words array, m = max size of a word in words array, k = size of chars array
 * SC : O(1) - although we are using hashmap, the size of the hashmap is not going to be greater than 27 (total char)
 * 
 */
var countCharacters = function (words, chars) {
    let res = 0;
    let charCounter = [...chars].reduce((charCt, ch) => { charCt[ch] = charCt[ch] ? charCt[ch] + 1 : 1; return charCt }, {})
    for (let word of words) {
        let curCharCounter = {};
        let isGood = true;
        for (let i = 0; i < word.length; i++) {
            curCharCounter[word[i]] = curCharCounter[word[i]] ? curCharCounter[word[i]]+1 : 1;
            if (charCounter[word[i]] && charCounter[word[i]] >= curCharCounter[word[i]]) {
                isGood = false;
            }
        }
        if (isGood) {
            res += word.length;

        }
    }
    return res;
};