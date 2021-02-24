/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length <= 1) return nums.length
    let memo = Array.from({ length: nums.length }).fill(1)
    let size = 0
    let max = 1
    for (let x = 0; x < nums.length; x++){
        let i = 0, j=size
        while (i != j) {
            if (nums[i] < nums[j]) {
                memo[j] = Math.max(memo[j], memo[i] + 1)
                i++
                max = Math.max(max,memo[j])
            } else {
                if (i < j) i++
                else j++
            }
        }
        if(i===j) size++
    }
    return max
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
console.log(lengthOfLIS([7,8,5,6,2,1,9]))