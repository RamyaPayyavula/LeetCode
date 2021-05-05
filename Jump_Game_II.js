/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let currentJump = 0;
    let farthest = 0;
    let jumps = 0;
    for (let i = 0; i <nums.length-1; i++){
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentJump) {
            jumps += 1;
            currentJump = farthest;
        }
    }
    return jumps;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));