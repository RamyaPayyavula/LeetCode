/**
 * @param {string} s
 * @return {number}
 */
class Stack{
    constructor() {
        this.data = [];
        this.length = 0;
    }
    push(val) {
        this.data.push(val);
        this.length++;
    }
    pop() {
        if (this.length > 0) {
            const removed = this.top()
            this.data.pop();
            this.length--;
            return removed
        }
    }
    top() {
        return this.data[this.length - 1];
    }
    isEmpty() {
        return this.length === 0;
    }
}

var calculate = function (s) {
    if (s == null || s.length === 0) return 0;
    s = s.replace(/ /g,'')
    const len = s.length;
    const stack = new Stack();
    let currentNumber = 0;
    let operation = '+';
    for (let i = 0; i < len; i++) {
        let currentChar = s.charAt(i);
        if (!isNaN(currentChar)) {
            currentNumber = (currentNumber * 10) + (currentChar - '0');
        }
        if (isNaN(currentChar) || i === len - 1) {
            if (operation == '-') {
                stack.push(-currentNumber);
            }
            else if (operation == '+') {
                stack.push(currentNumber);
            }
            else if (operation == '*') {
                stack.push(stack.pop() * currentNumber);
            }
            else if (operation == '/') {
                stack.push(Math.trunc(stack.pop() / currentNumber));
            }
            operation = currentChar;
            currentNumber = 0;
        }
    }
    let result = 0;

    while (!stack.isEmpty()) {
        result += stack.pop();
    }
    return result;
}
//this works for single digit
// var calculate = function(s) {
//     s = s.replace(/ /g,'')
//     const stack = new Stack()
//     let i = s.length - 1, j = 0;
//     let res = ''
//     while (i >= 0) {
//         const ch = s.charAt(i)
//         if (ch === '*' || ch === '/') {
//             if (i > 0) {
//                 const evl = eval(s.charAt(--i) + ch + stack.top());
//                 stack.pop();
//                 stack.push(evl)
//             }
//         }
//         else stack.push(ch)
//         i--
//     }

//     while (stack.length > 0) {
//         res += stack.top();
//         stack.pop();
//     }
//     console.log('res',res)
//     return Math.floor(eval(res))
// };

// console.log(calculate(" 3/2 "));
// console.log(calculate(" 3+5 / 2 "));
// console.log(calculate("14/3-2"))

console.log(calculate("14-3/2"))
