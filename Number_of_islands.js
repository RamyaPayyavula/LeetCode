/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0
    const m = grid.length 
    const n = grid[0].length
    const offset = [[0,1],[1,0],[0,-1],[-1,0]]
    var dfs = function (row, col) {
        if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] === '0') return
        grid[row][col] = '0'
        for (x in offset) {
            dfs(offset[x][0]+row , offset[x][1]+col)
        }
    }
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (grid[i][j] === '1') {
                dfs(i, j)
                islands++
            }
        }
    }
    return islands
};

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))

console.log(numIslands( [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))