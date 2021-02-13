/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const routes = {}
    for (let i = 0; i < paths.length; i++){
        routes[paths[i][0]] = routes[paths[i][0]]
            ? routes[paths[i][0]].append(routes[paths[i][1]])
            : [routes[paths[i][1]]]
    }
    for (let i = 0; i < paths.length; i++){
       if(!routes[paths[i][1]]) return paths[i][1]
    }
    
};

console.log(destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]))
console.log(destCity([["B", "C"], ["D", "B"], ["C", "A"]]))
console.log(destCity([["A","Z"]]))