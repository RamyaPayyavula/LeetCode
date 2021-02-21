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
Stack.prototype.top = function () {
    if (this.head >= 0) return this.stack[this.head]
    return null
   
};
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    var stack1 = new Stack()
    let i = 0;
    while (i < S.length) {
        if (stack1.top() && stack1.top() === S[i]) {
            stack1.pop()
        } else {
            stack1.push(S[i])
        }
        i++
    }
    return stack1.stack.join('')
};

console.log(removeDuplicates("abbaca"))