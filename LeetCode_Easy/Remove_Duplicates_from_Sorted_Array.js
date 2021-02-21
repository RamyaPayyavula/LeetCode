/** Given a sorted array nums, remove the duplicates in-place such that each element appears only once 
 * and returns the new length. Do not allocate extra space for another array, you must do this by
 * modifying the input array in-place with O(1) extra memory. */
var removeDuplicates = function (nums) { 
    return Array.from(new Set(nums))
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) { 
    let i = 0, j = 1;
    const len = nums.length
    while (i < len && j < len) {
        if (nums[i] !== nums[j]) {
            nums[i + 1] = nums[j];
            i++;
            j++;
        } else {
            j++;
        }
    }
    nums = nums.splice(i+1, len);
}
console.log(removeDuplicates([1,1,2]))