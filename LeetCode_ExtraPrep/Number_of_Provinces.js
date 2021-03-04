/**
 * @param {number[][]} isConnected
 * @return {number}
 */
//using depth first search
var findCircleNum = function (isConnected) {
    let visited = new Set()
    let count = 0;
    dfs = (i) => {
        for (let j = 0; j < isConnected[0].length; j++){
            if (isConnected[i][j] === 1 && !visited.has(j)) {
                visited.add(j)
                dfs(j)
            }
        }
    }
    for (let i = 0; i < isConnected.length; i++){
        if (!visited.has(i)) {
            dfs(i)
            count++
        }
    }
    return count
};

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))