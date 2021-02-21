/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = new Map()
    for (let i = 0; i < nums.length; i++){
        const rem = target - nums[i]
        if (hash.has(rem)) return [i, hash.get(rem)]
        else  hash.set(nums[i], i)
    }
    return []
};

console.log(twoSum([2,7,11,15],9))
// console.log(twoSum( [3,2,4],6))
// console.log(twoSum([3, 3], 6))
// console.log(twoSum([2,5,5,11],10))
