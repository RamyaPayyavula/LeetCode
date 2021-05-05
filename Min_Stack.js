/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.head = -1;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.head === -1) this.stack.push([x, x]);
    else {
        const currentMin = Math.min(x, this.stack[this.head][1]);
        this.stack.push([x, currentMin]);
    }
    this.head = this.head + 1
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.head = this.head - 1
};

/**
 * @return {number}
 */
/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.head][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.head][1];
};