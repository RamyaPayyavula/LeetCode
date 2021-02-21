/**Runtime: 168 ms, faster than 66.86% of JavaScript online submissions for Roman to Integer.
Memory Usage: 44.7 MB, less than 84.69% of JavaScript online submissions for Roman to Integer. */

var romanToInt = function (s) {
    const roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let sum = 0;
    let temp=null
    let i = s.length-1;
    while (i >= 0) {
        const ch = s.charAt(i)
        const prev = roman[ch]
        if (temp) {
            const next = roman[temp]
            if (prev >= next) sum = sum + prev
            else sum = sum - prev
        }
        else sum = sum + prev
        temp = ch
        i--
    }
    return sum
}

console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("MCDLXXVI"))