/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().replace(/  +/g, ' ').split(" ").reverse().join(" ")
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))
console.log(reverseWords("  Bob    Loves  Alice   "))
console.log(reverseWords("Alice does not even like bob"))
