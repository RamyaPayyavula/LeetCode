var topologicalSortHelper = (node, adjacencyList, visited, sorted) => {
    let edges = adjacencyList[node]
    for (let i = 0; i < edges.length; i++){
        if (!visited.has(edges[i])) {
            topologicalSortHelper(edges[i],adjacencyList,visited,sorted)
        }
    }
    sorted.push(node)
}

var topologicalSort = (nodes, adjacencyList) => {
    let sorted = []
    let visited = new Set()
    for (let i = 0; i < nodes.length; i++){
        if (!visited.has(nodes[i])) {
            topologicalSortHelper(nodes[i],adjacencyList,visited,sorted)
        }
    }
    while (sorted.length > 0) {
        sorted.pop()
    }
}