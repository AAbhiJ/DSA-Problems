/**
 * @param {string} s
 * @return {boolean}
 * TC : O(N)
 * SC : O(N) - we are using stack
 */
var isValid = function(s) {
    let parenthesisStack = [];
 
    const parenthesis = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    }
 
    for(let i = 0; i < s.length; i++){
     if(!(Object.keys(parenthesis).includes(s[i]))){
         //insert in stack
         parenthesisStack.push(s[i]);
     }else{
         //pop last element
         const lastElement = parenthesisStack.pop();
 
         //check if match closing if not return false;
         if(parenthesis.length==0 || parenthesis[s[i]] !== lastElement){
             return false;
         }
     }
    }
 
 // if stack not empty return false;
 return parenthesisStack.length===0;
 
 };