/**
 * @param {number} n
 * @return {string[]}
 * Time Complexity : O(N) - As we are need to iterate for n times (N - n (Number))
 * Space Complexity : O(N) - As we are creating a arr of size N to store the answers
 */
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