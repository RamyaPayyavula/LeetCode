/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    
    let n, m, maxGold = -Infinity
    const offset = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    dfs = (grid, i, j, goldCollected) => {
        if (i<0 || j<0 || i>=m || j>=n || grid[i][j] === 0) return goldCollected
        let currentCoin = grid[i][j]
        grid[i][j] = 0
        maxGold = Math.max(maxGold, goldCollected + currentCoin)
        for (x in offset) {
            dfs(grid, offset[x][0]+i , offset[x][1]+j, goldCollected + currentCoin)
        }
        grid[i][j] = currentCoin
    }
    maxGoldCoins = () => {
        m = grid.length
        n = grid[0].length
        for (let i = 0; i < m; i++){
            for (let j = 0; j < n; j++){
                let tempTot = 0
                if(grid[i][j]!==0) dfs(grid,i,j, tempTot)
            }
        }
    }
    maxGoldCoins()
    return maxGold
};

console.log(getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]]))
console.log(getMaximumGold( [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]))
