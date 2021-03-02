/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0; j = height.length -1
    let res = 0
    while (i < j) {
        const min  = Math.min(height[i], height[j])
        res = Math.max(res, min * (j - i))
        if (height[i] < height[j]) {
            i++
        } else j--
    }
    return res
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1,1]))
console.log(maxArea([4,3,2,1,4]))
console.log(maxArea([1, 2, 1]))
console.log(maxArea([1]))
console.log(maxArea([1,3,2,5,25,24,5]))