/* Implement atoi which converts a string to an integer. The function first discards as many 
 * whitespace characters as necessary until the first non-whitespace character is found. Then, 
 * starting from this character takes an optional initial plus or minus sign followed by as many 
 * numerical digits as possible, and interprets them as a numerical value. The string can contain 
 * additional characters after those that form the integral number, which are ignored and have no 
 * effect on the behavior of this function. If the first sequence of non-whitespace characters in str
 *  is not a valid integral number, or if no such sequence exists because either str is empty or it 
 * contains only whitespace characters, no conversion is performed. If no valid conversion could be 
 * performed, a zero value is returned. */

 /**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    let res=''
    if (s.length > 0) {
        const first = s[0]
        if (first === '-' || first === '+' || !isNaN(first)) {
            for (let i = 0; i < s.length; i++){
                if ((isNaN(s[i]) || s[i]===' ')&& (i !== 0 || (i === 0 && first !== '-' && first !== '+'))) {
                    break;
                }
                res = res + s[i];
            }
            if(res.length === 1 && (res[0] === '+' || res[0]=== '-')) return 0
            if (res.length > 0) {
                if (Number(res) > Math.pow(2, 31) - 1 || Number(res) < -Math.pow(2, 31)) {
                    return res[0] === '-' ? - Math.pow(2, 31) : Math.pow(2, 31) - 1;
                }
            
            return res[0] === '+'?  res.substring(1,res.length): res;
        }
        }
        
    }
    return 0
};

// console.log(myAtoi('42'))
// console.log(myAtoi("   -42"))
// console.log(myAtoi("4193 with words"))
// console.log(myAtoi("words and 987"))
// console.log(myAtoi("-91283472332"))
// console.log(myAtoi("+-12"))
// console.log(myAtoi("21474836460"))
console.log(myAtoi("+0 123"))