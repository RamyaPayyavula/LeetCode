/**
 * @param {number[][]} grid
 * @return {number}
 */
//used breadth first search and queue to solve this problem
var shortestPathBinaryMatrix = function (grid) {
    const m = grid.length - 1, n = grid[0].length - 1;
    if (grid[0][0] !== 0 || grid[m][n]) return -1;
    let queue = [[0, 0]]
    grid[0][0]=1
    const offsets = [[0, -1], [-1, 0], [-1, -1], [1, 1], [0, 1], [1, -1], [-1, 1], [1, 0]];
    let maxPath = -1;
    getNeighbours = (row, col) => {
        const neghibours = []
        for (x of offsets) {
            const r = row + x[0];
            const c = col + x[1];
            if (r >= 0 && r <= m && c >= 0 && c <= n && grid[r][c] === 0) {
                neghibours.push([r,c])
            }
        }
        return neghibours;
    }

    while (queue.length > 0) {
        const que = queue[0]
        const i = que[0], j = que[1];
        const distance = grid[i] [j];
        if(i === m && j===n ) return distance
        if (i < 0 || j < 0 || i > m || j > n) return
        for (neigh of getNeighbours(i, j)) {
            const nRow = neigh[0];
            const nCol = neigh[1];
            grid[nRow][ nCol] = distance + 1
            queue.push([nRow, nCol]);
        }
        queue.shift();
    }
   
    return maxPath;
};

console.log(shortestPathBinaryMatrix([[0, 1], [1, 0]]));
console.log(shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]));
console.log(shortestPathBinaryMatrix([[1,0,0],[1,1,0],[1,1,0]]))
console.log(shortestPathBinaryMatrix([[0,0,0,1],[1,1,1,0],[1,1,0,1],[1,1,1,0]]))