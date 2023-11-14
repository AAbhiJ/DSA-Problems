/**
 * @param {number} n
 * @return {string[]}
 */

/**
 * My Approach
 * TC : O(4^N/sqrt(N) * N) 
 * SC : O(N)
 */

const isValidParStr = function(str){
    let stack = [];
    for(let i = 0; i < str.length; i++){
        if(str[i]==='('){
            stack.push(str[i]);
        }else{
            if(stack.length == 0 || stack.pop() !== '(')return false;
        }
    }
    return stack.length===0;
}

const isValid = function(str, n){
    let openingCount = 0, closingCount = 0;
    
    for(let i = 0; i < str.length; i++){
        if(str[i]==='(')openingCount++;
        if(str[i]===')')closingCount++;
    }
    //console.log({str, openingCount, closingCount, n, opA : openingCount > n, clA : closingCount > n});
    if(openingCount > n || closingCount > n)return false;

    return true;
}

const helperFn = function(answer, str, idx, n){
    if(str.length == 2*n && isValidParStr(str)){
        answer.push(str);
        return;
    }

    if(isValid(str+'(', n)){
       //console.log({str, nstr : str+'(', val : isValid(str+'(')});
        helperFn(answer, str+'(', idx+1, n);
    }
    if(isValid(str+')', n)){
        helperFn(answer, str+')', idx+1, n);
    }
}

var generateParenthesis = function(n) {
  let answer = [];
  helperFn(answer, "", 0, n);  
    return answer;
};


/**
 * 
 * Editorial Approach
 * 
 * TC :  O(4^N/sqrt(N))
 * SC : O(N)
 * 
 */

/**
 * @param {number} n
 * @return {string[]}
 */

const isValidParStr = function(str){
    let leftCount = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i]==='(')leftCount++;
        else leftCount--;

        if(leftCount<0)return false
        
    }
    return leftCount===0;
}

const helperFn = function(answer, str, leftCount, rightCount, n){
    if(str.length == 2*n && isValidParStr(str)){
        answer.push(str);
        return;
    }

    if(leftCount < n){
       //console.log({str, nstr : str+'(', val : isValid(str+'(')});
        helperFn(answer, str+'(', leftCount+1, rightCount, n);
    }
    if(leftCount > rightCount){
        helperFn(answer, str+')', leftCount, rightCount+1, n);
    }
}

var generateParenthesis = function(n) {
  let answer = [];
  helperFn(answer, "", 0, 0, n);  
    return answer;
};