/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s=s.trim()
    let sign=""
    let i = 0
    let res
    if (s.length === 0) return 0
    if (s.length > 0) {
        let num=""
        if (s.charAt(i) === "-" || s.charAt(i) === "+") {
            sign = s.charAt(i)
            i++
        }
        while (i < s.length && !isNaN(s.charAt(i)) && s.charAt(i) !== ' ') {
            num += s.charAt(i)
            i++
        }
        if (i === 0 || (i === 1 && sign.length)) return 0
        const upperbound = Math.pow(2, 31)
        const lowerBound = -upperbound
        res = sign.length > 0 ? Number(sign + num) : Number(num)
        if ( lowerBound <= res && res <= upperbound-1) return res
        else if (lowerBound > res) return lowerBound
        else return upperbound-1
    }
};

console.log(myAtoi("42"))
console.log(myAtoi("        -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("987 words and "))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("   +0 123"))