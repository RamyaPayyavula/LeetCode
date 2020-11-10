/**Given an array of integers nums, sort the array in increasing order based on the frequency of the values. 
 * If multiple values have the same frequency, sort them in decreasing order. Return the sorted array. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    nums.sort((a, b) => (map.get(a) - map.get(b)) || (b - a));
    
    return nums;
};
console.log(frequencySort([1, 1, 2, 2, 2, 3]));