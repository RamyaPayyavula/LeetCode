/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prevMax = 0;
    let currMax = 0;
    for (let i = 0; i < nums.length;i++) {
        const temp = currMax;
        currMax = Math.max(prevMax + nums[i], currMax);
        prevMax = temp;
    }
    return currMax;
};

console.log(rob([1,7,5,6,7,1]))