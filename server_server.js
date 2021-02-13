/**
 * @param {number} n
 * @param {number[][]} con
 * @return {number[][]}
 */
/* it's a wrong solution needs to be done using graphs
var criticalConnections = function(n, con) {
    let graph = {}
    let critical = []

    for (let i = 0; i < n; i++){
        graph[con[i][0]] = graph[con[i][0]]
            ? graph[con[i][0]].concat(con[i][1])
            : [con[i][1]]
         graph[con[i][1]] = graph[con[i][1]]
            ? graph[con[i][1]].concat(con[i][0])
            : [con[i][0]]
    }
    console.log('gra',graph)
    for (key in graph) {
        if (graph[key].length < 2) {
            critical.push([Number(key),...graph[key]])
        }
    }
    return critical
};

// console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]))
console.log(criticalConnections(6, [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4], [4, 5], [5, 3]]))
