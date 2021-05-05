/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
// Remove a ")" if it is encountered when stack was already empty (prevent negative balance).
// Remove a "(" if it is left on stack at end (prevent non-zero final balance).
    
    const stack = [];
    let i = 0;
    let indicesToRemove = [];
    while (i<s.length) {
        const ch = s.charAt(i);
        if (ch === '(') {
            stack.push(i);
        } else if(ch ===')'){
            if (stack.length > 0) stack.pop();
            else indicesToRemove.push(i) 
        }
        i++;
    }
    indicesToRemove = indicesToRemove.concat(stack)
    s = Array.from(s)
    while (indicesToRemove.length) {
        s.splice(indicesToRemove.pop(), 1);
    }
    return s.join('')
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("a)b(c)d"));
console.log(minRemoveToMakeValid("))(("));
console.log(minRemoveToMakeValid("(a(b(c)d)"));
