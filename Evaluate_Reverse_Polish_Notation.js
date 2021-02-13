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
 * @param {string[]} s
 * @return {number}
 */
var evalRPN = function(s) {
    const size = s.length
    if (size === 0) return true
    if (size === 1) return s[0]
    var stack1 = new Stack()
    var stack2 = new Stack()
    let res = 0
    for (let i = 0; i < size; i++){
        stack1.push(s[i])
    }
    while(stack1.size() >0)
    {
      const pop1 = stack1.top()
        stack1.pop()
        if (isNaN(pop1)) {
            stack2.push(pop1)
        } else {
            let pop2
            let pop3
            if (!isNaN(stack2.top())){
                pop2 = stack2.top()
                stack2.pop()
                pop3 = stack2.top()
                stack2.pop()
                res = Math.trunc(eval(`${pop1}${pop3}(${pop2})`))
                stack1.push(res)
            } else if (!isNaN(stack1.top())) {
                if (stack1.top()) {
                    pop2 = stack1.top()
                    stack1.pop()
                    pop3 = stack2.top()
                    stack2.pop()
                    res = Math.trunc(eval(`${pop2}${pop3}(${pop1})`))
                    stack1.push(res)
                } else {
                    pop2 = stack2.top()
                    stack1.pop()
                    pop3 = stack2.top()
                    stack2.pop()
                    res = Math.trunc(eval(`${pop1}${pop3}(${pop2})`))
                    stack1.push(res)
                }
                
            } else {
                stack2.push(pop1)
            }
        }  
    }   
    return res

};

console.log(evalRPN(["3","-4","+"]))
console.log(evalRPN(["2", "1", "+", "3", "*"]))
console.log(evalRPN(["4", "13", "5", "/", "+"]))
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))

console.log(eval('2-(-3)'))