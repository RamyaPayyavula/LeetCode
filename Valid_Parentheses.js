var Stack = function() {
    this.stack = []
    this.head = -1
};

/** 
 * @param {number} x
 * @return {void}
 */
Stack.prototype.push = function(x) {
    this.stack.push(x)
    this.head = this.head + 1
};

/**
 * @return {void}
 */
Stack.prototype.pop = function() {
    this.stack.pop()
    this.head = this.head - 1
};

/**
 * @return {number}
 */
Stack.prototype.top = function() {
    return this.stack[this.head]
};

Stack.prototype.size = function() {
    return this.stack.length
};

/**
 * @return {number}
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack1 = new Stack()
    var stack2 = new Stack()
    if (s.length === 0) return true
    if (s.length % 2 !== 0) return false
    const size = s.length
    for (let i = 0; i < size; i++){
        stack1.push(s[i])
    }
    for (let i = 0; i < size; i++){
        const popped = stack1.top()
        stack1.pop()
        if (popped === ']' || popped === ')' || popped === '}') {
            stack2.push(popped)
        } else {
            const stack2top = stack2.top()
            if ((popped === '[' && stack2top !== ']') || (popped === '(' && stack2top !== ')') || (popped === '{' && stack2top !== '}')) {
                return false
            }
            stack2.pop()
        }
    }
    if (stack1.size() === 0 && stack2.size() === 0) return true
    return false
};

console.log(isValid("{[]}"))