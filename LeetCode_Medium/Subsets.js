/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    let n= nums.length
    var backtrack = (start, cur_list) => {
        res.push([...cur_list])
        for (let j = start; j < n; j++) {
            cur_list.push(nums[j])
            backtrack(j + 1, cur_list)
            cur_list.pop()
        } 
    }
    backtrack(0, [])
    return res
};
//can also be solved mathematically using combinations with repitions formula
// recurisve and bruteforce too
console.log(subsets([1,2,3]))