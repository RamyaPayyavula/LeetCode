/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const largetIndex = nums.reduce((acc, ele, i) => nums[acc] < ele ? acc = i : acc, 0);
    let i = 0;
    while (i < nums.length) {
        if (i !== largetIndex && nums[i]*2 > nums[largetIndex]) {
            return -1;
        }
        i++;
    }
    return largetIndex;
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([0,0,0,1]));
