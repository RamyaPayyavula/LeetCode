/**Given a sorted array of distinct integers and a target value, return the index if the target is 
 * found. If not, return the index where it would be if it were inserted in order. */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target || (i - 1 >= 0 && nums[i - 1] < target && nums[i] > target) || (i === 0 && nums[i] > target)) {
            return i;
        }
    }
    return nums.length
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1], 0))