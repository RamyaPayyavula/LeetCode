/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = null
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++){
        let j = i + 1, k = nums.length - 1
        while (j < k) {
            const subtot = nums[i] + nums[j] + nums[k]
            if (subtot === target) {
                res = target
                break
            }
            else if (subtot > target) {
                res = res!==null && Math.abs(target - res) < Math.abs(target - subtot) ? res : subtot
                k--
            }
            else {
                res = res!==null && Math.abs(target - res) < Math.abs(target - subtot) ? res : subtot
                j++
            }
        }
    }
    return res
};

console.log(threeSumClosest([0,2,1,-3],1))
// console.log(threeSumClosest([-1, 2, 1, -4], 1))

// console.log(threeSumClosest([-1,3,1,4], 3))