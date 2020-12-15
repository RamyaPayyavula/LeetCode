/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let j = -1;
    if (nums.length < k) {
        let i = Math.floor(k / nums.length);
        j = k % nums.length;
        if (i % 2 === 0) {
            nums.reverse();
        }
    }
    j = j >=0 ? j : k
    if (j > 0 || nums.length > k) {
        const rot = nums.splice(0, nums.length - j);
        nums.splice(nums.length, 0, ...rot)
    }
    return nums
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([-1,-100,3,99],2))
console.log(rotate([1, 2, 3], 4));
