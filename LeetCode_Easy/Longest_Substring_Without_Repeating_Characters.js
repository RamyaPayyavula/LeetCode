/**
 * @param {string} s
 * @return {number}
 */
//O(n*n) time complexity and contsant space complexity
var lengthOfLongestSubstring = function(s) {
    let i = 0, j =0
    let res = 0
    let visited = new Set()
    while (i < s.length && j< s.length) {
        const cha = s.charAt(j)
        if (!visited.has(cha)) {
            visited.add(cha)
            j++
            res = Math.max(res, j - i)
        } else {
            visited.delete(s.charAt(i))
            i++
        }
    }
    return res
};

//O(n+d) linear time complexity and contsant o(d)space complexity where d is the no of alphabets
var lengthOfLongestSubstring = function(s) {
    let i = 0, j=0
    let visited = {}
    let res = 0
    while (j < s.length) {
        const cha = s.charAt(j)
        if (visited[cha]) {
            i = Math.max(i, visited[cha] + 1)
        }
        res = Math.max(res, j-i + 1)
        visited[cha] = j
        j++
    }
    return res
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
