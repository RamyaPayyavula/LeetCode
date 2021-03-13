/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var topologicalSortHelper = (node, adjacencyList, visited, sorted) => {
    let edges = adjacencyList[node]
    visited[node] = 1
    if( edges && edges.length) {
        for (let i = 0; i < edges.length; i++){
            if (visited[edges[i]] === 1) return true // this condition is checking the cycle
            if( visited[edges[i]] === 0 && topologicalSortHelper(edges[i],adjacencyList,visited,sorted))
                return true
        } 
    }
    visited[node] = 2
    sorted.push(node)
    return false
}

var topologicalSort = (numCourses, adjacencyList) => {
    let sorted = []
    let visited = new Array(numCourses).fill(0)
    for (let i = 0; i < numCourses; i++){
        if (visited[i] === 0 && topologicalSortHelper(i,adjacencyList,visited,sorted)) return []
    }
    return sorted.reverse()
}
var findOrder = function(numCourses, prerequisites) {
    let adjacencyList = {}

    for (list of prerequisites) {
        const node = list[1]
        adjacencyList[node] = (adjacencyList[node] || []).concat(list[0])
    }
    return topologicalSort(numCourses, adjacencyList);
};

console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]))
console.log(findOrder(2, [0, 1]));
console.log(findOrder(2, [1, 0]));
console.log(findOrder(1,[]))