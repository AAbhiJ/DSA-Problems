/** My Approach 
 * Time Complexity : O(N)
 * Space Complexity : O(N)
 * 
*/

var MinStack = function() {
    this.stack = [];
    this.topPointer = -1;
    this.minElement = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.topPointer++;
    this.minElement = this.minElement == null || this.minElement > val ? val : this.minElement;
};

function findMin(stack){
return stack.reduce((ini, ele)=> ini < ele ? ini : ele, Math.min());
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.topPointer--;
    this.minElement = findMin(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.topPointer];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minElement;
};


/** Editorial Approach 
 * Time Complexity : O(1)
 * Space Complexity : O(N)
 * 
*/

function last(arr) {
    return arr[arr.length - 1];
}


var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (this.minStack.length == 0 ||
        last(this.minStack)[0] > val) {
        this.minStack.push([val, 1]);
    } else if (last(this.minStack)[0] == val) {
        last(this.minStack)[1]++;
    }

};


/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    
    if(last(this.minStack)[0]==last(this.stack)){
        last(this.minStack)[1]--;
    }
    
    if(last(this.minStack)[1]==0){
        this.minStack.pop();
    }
    
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return last(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return last(this.minStack)[0];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */