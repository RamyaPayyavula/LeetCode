/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let closeParan = 0;
    let openParan = 0;
    for (let i = s.length-1; i >=0; i--){
        const ch = s.charAt(i);
        if (ch === ')' ||ch==='*' ) closeParan++;
        else closeParan--;
        if (closeParan < 0) return false;
    }

    for (let i = 0; i <s.length; i++){
        const ch = s.charAt(i);
        if (ch === '(' || ch==='*') openParan++;
        else openParan--;
        if (openParan < 0) return false;
    }
    return true;
};

console.log(checkValidString("()"));
console.log(checkValidString("(*)"));
console.log(checkValidString( "(*))"));
console.log(checkValidString( "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"));    