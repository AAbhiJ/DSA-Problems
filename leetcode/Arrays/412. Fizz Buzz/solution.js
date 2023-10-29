/**
 * @param {number} n
 * @return {string[]}
 * Time Complexity : O(N) - As we are need to iterate for n times (N - n (Number))
 * Space Complexity : O(1) - As we are creating a answerArr of size N, however this do not contribute to the Space complexity
 */

/** Version 1 */
var fizzBuzz = function (n) {
    let answerArr = [];
    for (let i = 1; i <= n; i++) {
        let res = `${i}`;
        if(i % 5 === 0) res = "Buzz";
        if(i % 3 === 0) res = "Fizz";
        if (i % 3 === 0 && i % 5 === 0) res = "FizzBuzz";

        answerArr.push(res)

    }
    return answerArr;
};

/** Version 2 */
var fizzBuzz = function (n) {
    let answerArr = [];
    for (let i = 1; i <= n; i++) {
        let res = ``;

        if(i % 3 === 0) res += "Fizz";
        if(i % 5 === 0) res += "Buzz";
        if(res === '') res = `${i}`;
        answerArr.push(res)

    }
    return answerArr;
};