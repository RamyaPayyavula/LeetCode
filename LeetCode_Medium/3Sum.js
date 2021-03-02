/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []
    let res = []
    let seen = {}
    nums = nums.sort((a, b) => a - b)
    if(nums[0] === nums[nums.length -1] && nums[0] === 0) return [[nums[0],nums[0],nums[0]]]
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > 0) break
        let j = i + 1, k = nums.length - 1
        while (j < k) {
            const subtot = nums[i] + nums[j] + nums[k]
            const temp = `${nums[i]}${nums[j]}${nums[k]}`
            if (subtot === 0) {
                if (!seen[temp]) { 
                    res.push([nums[i], nums[j], nums[k]])
                    seen[temp] = true
                }
                j++
            } 
            else if (subtot > 0) k--
            else j++
        }
    }
    return res
};

console.log(threeSum([0,0,0,0]))
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([1,-1,-1,0]))
console.log(threeSum([-2,0,1,1,2]))