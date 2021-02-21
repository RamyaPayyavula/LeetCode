/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length;
    rotation(nums, 0, nums.length - 1)
    rotation(nums,0,k-1)
    rotation(nums, k, nums.length - 1)
    return nums
}

var rotation = function (nums, start, end) {
    while (start < end) {
        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++;
        end--;
    }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([-1], 2))
console.log(rotate([1,2],1))