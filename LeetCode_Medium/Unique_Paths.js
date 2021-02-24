/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//also can be solve using mathematical formual
// factorial(m+n-2)/(factorial(m-1) * factorail(n-1))
var uniquePaths = function (m, n) {
    if (m === 1 || n === 1) return 1
    let memo = []
    for (let i = 0; i < m; i++){
        memo[i] = Array.from({length: n}).fill(1)
    }
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            memo[i][j] = memo[i - 1][j] + memo[i][j - 1]
        }
    }
    return memo[m-1][n-1]
};

console.log(uniquePaths(3, 7))
console.log(uniquePaths(3, 2))
console.log(uniquePaths(7, 3))
console.log(uniquePaths(3,3))