/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let i = 0, j = s.length - 1
    while (i < j) {
        if (s[i] !== s[j]) return false
        i++
        j--
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome( "race a car"))