/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if(s.length !== t.length) return false
    let obj = {}
    for (let i = 0; i < s.length; i++){
        obj[s.charAt(i)] = (obj[s.charAt(i)] || 0) + 1
    }
    for (let i = 0; i < t.length; i++){
        if (obj[t.charAt(i)]) {
            obj[t.charAt(i)] = obj[t.charAt(i)] - 1
        }
        else return false
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat","car"))