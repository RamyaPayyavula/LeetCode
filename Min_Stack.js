/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.head = -1
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
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
MinStack.prototype.top = function() {
    return this.stack[this.head]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack.reduce((acc,ele)=> acc < ele ? acc : ele,Infinity)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack()
obj.push(2)
obj.push(0)
obj.push(3)
obj.push(0)
console.log(obj)
console.log(obj.getMin())
console.log(obj.pop())
console.log(obj.getMin())
console.log(obj.pop())
console.log(obj.getMin())
console.log(obj)
console.log(obj.pop())
console.log(obj)
console.log(obj.getMin())

// console.log(obj.top())
// console.log(obj.getMin())