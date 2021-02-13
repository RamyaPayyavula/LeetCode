/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let rotten = []
    let fresh =0
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (grid[i][j] === 1) fresh++;
            if(grid[i][j]=== 2) rotten.push([i,j])
        }
    }
    let steps = 0;
    const adjacent = [[0, -1], [0, 1], [-1, 0], [1, 0],];
    while (fresh && rotten.length) {
        let rotting = []
        while (rotten.length) {
            const [i, j] = rotten.pop()
            for (let ind = 0; ind < 4; ind++) {
                [x, y] = [i + adjacent[ind][0], j + adjacent[ind][1]]
                if (grid[x] && grid[x][y] === 1) {
                    fresh--
                    grid[x][y] = 2
                    rotting.push([x, y])
                }
            }
        }
        rotten = rotting
        steps++
    }
    
    return fresh > 0 ? -1 : steps;
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]))
console.log(orangesRotting( [[0,2]]))
// 2 2 1
// 2 1 0
// 0 1 1

