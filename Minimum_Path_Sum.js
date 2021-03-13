/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length -1
    const n = grid[0].length-1
    for (let i = m; i >= 0; i--){
        for (let j = n; j >= 0; j--){
            if (i === m && j === n) continue
            let right = Infinity, down =Infinity
            if (i < m) {
                down = grid[i+1][j]
            }
            if (j < n) {
                right =  grid[i][j+1]
            }
            grid[i][j] = grid[i][j]+Math.min(right,down)
        }
    }
    return grid[0][0]
}
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))

console.log(minPathSum( [[1,2,3],[4,5,6]]))
