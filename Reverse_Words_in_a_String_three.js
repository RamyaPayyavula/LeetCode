/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').reduce((acc,ele)=> acc+ ' '+ele.split('').reverse().join(''),'').trim()
};

console.log(reverseWords("Let's take LeetCode contest"))