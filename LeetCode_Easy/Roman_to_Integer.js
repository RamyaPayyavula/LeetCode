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
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let stack1 = new Stack()
    let temp = null
    let sum=0
    for (let i = 0; i < s.length; i++){
        stack1.push(s.charAt(i))
    }
    while (stack1.size() > 0) {
        if (temp) {
            const prev = roman[stack1.top()]
            const next = roman[temp]
            if (prev >= next) sum = sum + prev
            else sum = sum - prev
            temp = stack1.top()
            stack1.pop()
        }
        else {
            const prev = roman[stack1.top()]
            sum = sum + prev
            temp = stack1.top()
            stack1.pop()
        }
    }
    return sum
};

console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("MCDLXXVI"))