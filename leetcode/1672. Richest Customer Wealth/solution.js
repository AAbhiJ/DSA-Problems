/**
 * @param {number[][]} accounts
 * @return {number}
 * 
 * Time Complexity : O(N*M) - As we are need to iterate whole Array Matrix atleast once (N - accounts.length, M - accounts[0].length)
 * Space Complexity : O(1) - As we are using additional 2 variable, But it do not impact that much
 * 
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
  for(let i = 0; i < accounts.length; i++){
      let curCustomerWealth = 0;
      for(let j = 0; j < accounts[0].length; j++){
          curCustomerWealth += accounts[i][j];
      }
      maxWealth = curCustomerWealth > maxWealth ? curCustomerWealth : maxWealth;
  }  
  return maxWealth;
};