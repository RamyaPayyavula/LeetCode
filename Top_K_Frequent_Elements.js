/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const hash = {};
    for (let i = 0; i < nums.length; i++){
        hash[nums[i]] = (hash[nums[i]] || 0) + 1;
    }
    nums = Array.from(new Set(nums))
    const sorted = nums.sort((a, b) => hash[a] - hash[b]);
    return sorted.slice(sorted.length -k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));
console.log(topKFrequent([3,0,1,0], 1));