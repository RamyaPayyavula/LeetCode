/**
 * @param {number[]} nums
 * @return {number}
 */
//not correct solution
var deleteAndEarn = function(nums) {
    let dict = {};
    for (let i = 0; i < nums.length; i++){
        dict[nums[i]] = (dict[nums[i]] || 0) + 1;
    }
    nums = Array.from(new Set(nums));
    let max = -Infinity;
    var dp = function (ele, idx, nums, dict, sum) {
        if (nums.length === 0) return sum;
        sum += ele * dict[ele];
        nums.splice(idx, 1);

        if (dict[ele - 1]) {
            dict[ele - 1] = 0;
            const i = nums.indexOf(ele - 1)
            if (i >= 0) nums.splice(i, 1);
        }
        if (dict[ele + 1]) {
            dict[ele + 1] = 0;
            const i = nums.indexOf(ele + 1)
            if (i >= 0) nums.splice(i, 1);
        }
        if (nums.length > 0) {
            for (let i = 0; i < nums.length; i++) {
                const temp = dp(nums[i], i, nums, dict, sum)
                sum = Math.max(sum, temp);
            }
        }
        
        return sum;
    }

    for (let i = 0; i < nums.length; i++){
        const temp = dp(nums[i], i, Array.from(nums), Object.assign({}, dict), 0);
        max = Math.max(max, temp);
    }
    return max;
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))
console.log(deleteAndEarn([3, 4, 2]));