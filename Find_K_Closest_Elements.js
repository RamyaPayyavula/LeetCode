/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

var findClosestElements = function (arr, k, x) {
    const res = arr.sort((a, b) => a === b ? a - b : Math.abs(a - x) - Math.abs(b - x))
    return res.slice(0,k).sort((a,b)=>a-b)
};

console.log(findClosestElements([1, 2, 2, 3, 4, 5], 4, 3))
console.log(findClosestElements([1, 3, 5, 10, 11, 12], 4, 10))
// console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1))
// console.log(findClosestElements([1,2,4,5,6],4,7))