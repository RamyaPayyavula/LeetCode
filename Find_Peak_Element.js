/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function(nums) {
    return search(nums, 0, nums.length-1);
};

var search = function (nums, left, right) {
    if (left === right) {
        return left;
    }
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) return search(nums, left, mid);
    return search(nums, mid + 1, right);
}

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1,2,1,3,5,6,4]));
console.log(findPeakElement([1,2,1,3,5,6,4,7,3,5,9]));