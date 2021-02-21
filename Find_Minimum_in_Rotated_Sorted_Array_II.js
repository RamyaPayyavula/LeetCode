/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        while (left < right && nums[left] === nums[right]) {
            left++;
        }
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};
    


// console.log(findMin([2, 2, 2, 0, 1]))
console.log(findMin([1, 3, 5]))
console.log(findMin([10,10, 10, 10, 1, 10]))
