/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
    const hash = {};
    let longest = "";
    for (let i = 0; i < s.length; i++){
        const ch = s.charAt(i);
        hash[ch] = (hash[ch] || 0) + 1;
    }
    let i = 0;
    while (i < dictionary.length) {
        const temp = Object.assign({}, hash);
        const str = dictionary[i];
        if (s.length >= str.length && str.length >= longest.length) {
            let j = 0;
            while (j < str.length) {
                if (temp[str.charAt(j)] > 0) {
                    temp[str.charAt(j)]--;
                    j++;
                }
                else break;
            }
            if (j === str.length) {
                if (str.length > longest.length) {
                    longest = str
                } else if (str.length === longest.length) {
                    if (str.localeCompare(longest) < 0) longest = str;
                }
            }
        }
        i++;
    }
    return longest
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
console.log(findLongestWord("abpcplea", ["a", "b", "c"]))
console.log(findLongestWord("abce", ["abe", "abc"]));
console.log(findLongestWord("aewfafwafjlwajflwajflwafj", ["apple", "ewaf", "awefawfwaf", "awef", "awefe", "ewafeffewafewf"]));
