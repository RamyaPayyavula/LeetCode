/** Given a string s, return the longest palindromic substring in s.*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
    if (str.length === null) return true;
    let longPal =""
    for (let i = 0; i < str.length; i++){
        const oddPalindrome = expandFromCenter(str, i, i);
        const evenPalindrome = expandFromCenter(str, i - 1, i);
        if (longPal.length < oddPalindrome.length) {
            longPal = oddPalindrome;
        }
        if (longPal.length < evenPalindrome.length) {
            longPal = evenPalindrome;
        }
    }
    return longPal;
};
var expandFromCenter = function (str, left, right) { 
    let longpal=""
    while (left >= 0 && right < str.length) {
        if (left === right) {
            longpal = str[left];
            left--;
            right++;
        } else if (str[left] === str[right]) {
            longpal = str.substring(left, right+1);
            left--;
            right++;
        } else {
            break;
        }
    }
    return longpal
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
