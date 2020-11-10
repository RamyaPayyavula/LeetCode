/**Given a string s, return the length of the longest substring between two equal characters, excluding 
 * the two characters. If there is no such substring return -1. A substring is a contiguous sequence of 
 * characters within a string. */

 /**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let res = -1;
    for (let i = 0; i < s.length; i++){
        const ele = s[i];
        const lastIndex = s.lastIndexOf(ele);
        res = res < (lastIndex - i - 1) ? (lastIndex - i - 1) : res;
    }
    return res;
};

console.log(maxLengthBetweenEqualCharacters("aa"));
console.log(maxLengthBetweenEqualCharacters("abca"));
console.log(maxLengthBetweenEqualCharacters("cbzxy"));
console.log(maxLengthBetweenEqualCharacters("cabbac"));