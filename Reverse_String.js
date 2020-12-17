/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let i = 0; let j = s.length-1;
    while (i <= j) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s;
};

var reverseString = function (s) {
    if (s.length === 0) return null;
    if (s.length === 1) return s[0];
    return reverseString(s.slice(1,s.length)).concat(s[0]);
};

var reverseString = function (s) {
    if (s.length === 0) return null;
    if (s.length === 1) return s[0];
    s = s[s.length - 1].concat(reverseString(s.slice(1, s.length - 1))).concat(s[0])
};

console.log(reverseString(["h","e","l","l","o"]))