/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
//https://leetcode.com/contest/weekly-contest-226/problems/restore-the-array-from-adjacent-pairs/
var restoreArray = function (adjacentPairs) {
    const arrlen = adjacentPairs.length
    let res
    const arrObj = {}
    if (arrlen <= 1) return adjacentPairs
    for (let i = 0; i < arrlen; i++){
        arrObj[adjacentPairs[i][0]] = (arrObj[adjacentPairs[i][0]] || []).concat(adjacentPairs[i][1])
    }
    res = adjacentPairs[0]
    for (node in arrObj) {
        
    }
    return arrObj
};

console.log(restoreArray([[2,1],[3,4],[3,2]]))