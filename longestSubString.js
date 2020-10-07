/**
 * @param {string} s
 * @return {number}
 */
// longest substring without repeating cahracters
var lengthOfLongestSubstring = function(s) {
    let subStr = '';
    let maxLen = 0;

    for(let i = 0; i < s.length ; i++){
        if(subStr.includes(s[i]))
        {
            maxLen = subStr.length > maxLen ? subStr.length : maxLen;
            subStr = subStr.substring(subStr.indexOf(s[i])+1, subStr.length) +s[i];
        }
        else {
            subStr += s[i];
        }
    }
    maxLen = maxLen < subStr.length ? subStr.length : maxLen;
    console.log(maxLen);
    return maxLen;
    
};
lengthOfLongestSubstring("dvdf");

// Input: "abcabcbb"
// Input: "bbbbb"
// Input: "pwwkew"
