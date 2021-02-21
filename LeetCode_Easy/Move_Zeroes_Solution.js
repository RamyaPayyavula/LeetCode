/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    let i = 0, j = 1
    while (i < nums.length && j < nums.length) {
        if (nums[i] === 0) {
            if (nums[j] !== 0) {
                nums[i] = nums[j]
                nums[j] = 0
                i++
                j++
            } else j++
        } else {
            i++
            j++
        }
    }
    return nums
}
console.log(moveZeroes([4,2,4,0,0,3,0,5,1,0]))
console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,1,0,0,0,3,12]))
console.log(moveZeroes([0,1,0,3,1,0,0,2]))
