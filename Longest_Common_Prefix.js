/**Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "" */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let firstWord = strs[0];

    while (firstWord && firstWord.length > 0) {
        const isSub = strs.reduce((acc, ele) => 
            ele.indexOf(firstWord) === 0  && acc ? true : false
        
        , true)
        if (isSub) return firstWord;
        else firstWord = firstWord.slice(0, -1)
    }
    return ""
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix( ["dog","racecar","car"]))
console.log(longestCommonPrefix( ["c","acc","ccc"]))