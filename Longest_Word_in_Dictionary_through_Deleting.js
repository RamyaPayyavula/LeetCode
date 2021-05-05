/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
    let longestWord = "";
    for (let i = 0; i < dictionary.length; i++){
        const substr = dictionary[i]
        if (isSubSequence(s,substr ) && (longestWord.length < substr.length || (longestWord.length === substr.length && substr.localeCompare(longestWord) < 0))) longestWord = substr;
    }
    
    return longestWord;
};
var isSubSequence = function (s, substr) {
    if (substr.length > s.length) return false;
    let i = 0,j = 0;
    while(i < s.length&& j < substr.length) {
        if (substr[j] === s[i]) {
            i++;
            j++;
        } else i++;
    }
    return j === substr.length;
}

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
console.log(findLongestWord("abpcplea", ["a", "b", "c"]))
console.log(findLongestWord("abce", ["abe", "abc"]));
console.log(findLongestWord("aewfafwafjlwajflwajflwafj", ["apple", "ewaf", "awefawfwaf", "awef", "awefe", "ewafeffewafewf"]));
