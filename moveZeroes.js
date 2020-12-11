/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0, count = 0;
    const len = nums.length
    while (i < len ) {
        if ( nums[i] === 0) {
            nums.splice(i, 1);
            count++;
        } else i++;
    }
    const zeroArr = new Array(count).fill(0);
    nums.push(...zeroArr); 
    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0,0,1]));