/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M':1000
    }
    let res=0
    for (let i = 0; i < s.length; i++){
        const prev = i > 0 ? dict[s[i - 1]] : 0
        const curr = dict[s[i]]
        res = res + (prev < curr ? curr - 2* prev : curr)
    }
    return res
};

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
