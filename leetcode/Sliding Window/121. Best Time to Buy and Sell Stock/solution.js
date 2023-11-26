/**
 * @param {number[]} prices
 * @return {number}
 *
 * TC : O(N)
 * SC : O(1)
 */
var maxProfit = function(prices) {
    let n = prices.length; 
    let left = 0, right=0;
    let maxProfit = Math.max();
    while(right<n){
        // if right has lower price than left, reassign left
        if(prices[right] < prices[left]){
            left = right;
        }

        maxProfit = Math.max(maxProfit, prices[right]-prices[left]);
        right++;
    }
    return maxProfit;
};