
var MinStack = function() {
    this.stack = [];
    this.min = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(val <= this.min[this.min.length-1]) this.min.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let curr = this.stack.pop()
    if(this.min[this.min.length-1] == curr) this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */