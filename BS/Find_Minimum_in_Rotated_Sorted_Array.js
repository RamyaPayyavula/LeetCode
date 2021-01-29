/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0];
    [left, right] = [0, nums.length - 1];
    while (left <= right) {
        const mid = Math.ceil((left + right) / 2)
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }else if (nums[mid] > nums[0] && nums[mid] > nums[nums.length - 1]) {
            return findMin(nums.slice(mid + 1, nums.length));
        } else {
            return findMin(nums.slice(0, mid));
        }
    }
};

console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4,5,6,7,0,1,2]))