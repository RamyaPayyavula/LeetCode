/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let i = 0;
    const arrSum = nums.reduce((acc, ele) => acc + ele, 0);
    while (i < nums.length) {
        const leftSum = nums.slice(0, i).reduce((acc, ele) => acc + ele, 0);
        const rightSum = arrSum - leftSum - nums[i];
        if (rightSum === leftSum) {
            return i;
        }
        i++;
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1,2,3]))