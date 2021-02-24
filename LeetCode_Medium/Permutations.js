/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) return [nums]
    if (nums.length === 2) return [nums, [nums[1], nums[0]]]
    let res = []
    const permute = (arr, m = []) => {
        if (arr.length === 0) res.push(m)
        else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }
    permute( nums)
    return res
};

console.log(permute([1]))