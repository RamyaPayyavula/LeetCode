/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const obj={}
    for (let i = 0; i < nums.length; i++){
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
        if (obj[nums[i]] > 1) {
            return nums[i]
        }
    }
};

console.log(findDuplicate([1, 3, 4, 2, 2]))
console.log(findDuplicate([3, 1, 3, 4, 2]))
console.log(findDuplicate([1, 1]))
console.log(findDuplicate([1,1,2]))