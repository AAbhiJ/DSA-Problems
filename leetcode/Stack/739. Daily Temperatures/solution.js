/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 
 * Editorial Approach
 * 
 * TC : O(n)
 * SC : O(1) - Not considering returned array
 * 
 * 
 */

var dailyTemperatures = function (temperatures) {
    let n = temperatures.length;
    let answer = new Array(n).fill(0);
    let hottest = 0;

    for(let curDay = n-1; curDay >= 0; curDay--){
        let curTemp = temperatures[curDay];
        if(curTemp >= hottest){
            hottest = curTemp;
            continue;
        }
        let days = 1;
        while(temperatures[curDay + days] <= curTemp){
            days += answer[curDay + days];
        }
        answer[curDay] = days;
    }
    return answer;
};