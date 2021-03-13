/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    const pCount = Array(26).fill(0),
          sCount = Array(26).fill(0),
          result = [],
          targetLength = p.length
    
    // calculate chars in target string
    for (let char of p) pCount[char.charCodeAt() - 97]++
    
    /* 
        1) loop over every char and add it to currWindow frequency
        2) compare with target frequency
    */
    for (let i=0; i<s.length; i++) {
        const char = s[i]
        
        // add p.length elements to window
        sCount[char.charCodeAt() - 97]++
        
        // remove the char which fell out of window
        if (i >= targetLength) sCount[s[i-targetLength].charCodeAt() - 97]--
        
        // compare 2 maps
        if (copmareMaps(sCount, pCount)) result.push(i-targetLength+1)
    }
    
    return result
};

const copmareMaps = (curr, target) => {
    for (let i=0; i<26; i++) {
        if (curr[i] !== target[i]) return false
    }
    
    return true
}

console.log(findAnagrams("cbaebabacd", "abc"))
console.log(findAnagrams("baa","aa"))