/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {}
    for (let i = 0; i < s.length; i++){
        const c = s.charAt(i)
        hash[c] = (hash[c] || 0) + 1
    }
    for (let i = 0; i < s.length; i++){
       if(hash[s.charAt(i)] === 1) return i
    }
    return -1   
};

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))