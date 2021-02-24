/**
 * @param {string} digits
 * @return {string[]}
 */
//Time and space complexity are O(3 power n * 4 power m)
var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    var obj = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let res = []
    var combination = (prefix, nextdigits, idx, res) => {
        if (idx >= nextdigits.length) {
            res.push(prefix)
            return
        } 
        const letters = obj[digits[idx]]
        for (let i = 0; i < letters.length; i++){
            combination(prefix +letters[i], digits, idx+1,res)
        }
    }
    combination("",digits,0,res)
    return res
}


console.log(letterCombinations("23"))

