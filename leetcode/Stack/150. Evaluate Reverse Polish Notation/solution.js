/**
 * @param {string[]} tokens
 * @return {number}
 * TC : O(N)
 * SC : O(N)
 */
var evalRPN = function(tokens) {
    let stack = [];
    const operators = ["+","-","/","*"]
    for(let i = 0; i < tokens.length; i++){
        if(operators.includes(tokens[i])){
            //pop last two elements
            const operand_2 = stack.pop();
            const operand_1 = stack.pop();
            const operator = tokens[i];
            // do calculations
            const answer = doCalculation(operand_1, operand_2, operator);
            
            // push the answer
            stack.push(answer);
        }else{
            stack.push(tokens[i]);
        }
    }
    return stack.pop();
};


const doCalculation = (operand_1,operand_2, operator)=>{
    operand_1 = parseInt(operand_1);
    operand_2 = parseInt(operand_2);
    switch(operator){
        case "+" : return operand_1 + operand_2;
        break;
        case "-" : return operand_1 - operand_2;
        break;
        case "/" : return parseInt(operand_1 / operand_2);
        break;
        case "*" : return operand_1 * operand_2;
        break;
        default : return 0
    }
}
