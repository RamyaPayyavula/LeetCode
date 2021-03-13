/**
 * @param {number[]} nums
 * @return {number}
 */

//time limit exceeds still learn better solution
var reversePairs = function (nums) {
    let count = 0
    var mergeSort = function (arr) {
        if (arr.length < 2) return arr
        const middle = Math.floor(arr.length / 2)
        const left = arr.slice(0, middle)
        const right = arr.slice(middle, arr.length)
        return merge(mergeSort(left), mergeSort(right))
    }
    var merge = function (leftArr, rightArr) {
        let i = 0, j = 0
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] > (rightArr[j] * 2)) {
                count++
            }
            if (j === rightArr.length -1) {
                i++
                j=0
            } else j++
        }
        return leftArr.concat(rightArr)
    }
    mergeSort(nums)
    return count
};

console.log(reversePairs([1, 3, 2, 3, 1]))
console.log(reversePairs([2,4,3,5,1]))