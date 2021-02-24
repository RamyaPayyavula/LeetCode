/**
 * @param {number} n
 * @return {string[]}
 */
//does not work properly
// var generateParenthesis = function(n) {
//     let res = new Set()
//     var backtrack = (prefix,idx) => {
//         if (idx >= n) {
//             if(!res.has(prefix)) res.add(prefix)
//             return
//         }
//         backtrack(`(${prefix})`, idx + 1)
//         backtrack(`()${prefix}`, idx + 1)
//         backtrack(`${prefix}()`, idx + 1)
//     }
//     backtrack('',0)
//     return Array.from(res)
// };

var generateParenthesis = (N) => {
    ans = []
    var backtrack = (S = '', left = 0, right = 0) => {
        if (S.length == 2 * N) {
            ans.push(S)
            return
        }
        if (left < N)  backtrack(S+'(', left+1, right)
        if (right < left) backtrack(S+')', left, right+1)
    }
    backtrack()
    return ans     
}
        

console.log(generateParenthesis(3))