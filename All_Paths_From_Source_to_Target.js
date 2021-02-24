/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const N = graph.length
    let res = []
    backTrack = (node, arr) => {
        if (node === N - 1) {
            res.push([...arr, node])
            return
        }
        for (let i = 0; i < graph[node].length; i++){
            backTrack(graph[node][i],[...arr,node])
        }   
    }
    
    backTrack(0,[])
    return res
};


// console.log(allPathsSourceTarget([[1, 2], [3], [3], []]))
console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]))
// console.log(allPathsSourceTarget([[1],[]]))
// console.log(allPathsSourceTarget([[1,2,3],[2],[3],[]]))
// console.log(allPathsSourceTarget( [[1,3],[2],[3],[]]))
