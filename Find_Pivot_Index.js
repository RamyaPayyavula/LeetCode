/**
 * @param {number[]} nums
 * @return {number}
 */
// var pivotIndex = function (nums) {
//     let i = 0;
//     const arrSum = nums.reduce((acc, ele) => acc + ele, 0);
//     while (i < nums.length) {
//         const leftSum = nums.slice(0, i).reduce((acc, ele) => acc + ele, 0);
//         const rightSum = arrSum - leftSum - nums[i];
//         if (rightSum === leftSum) {
//             return i;
//         }
//         i++;
//     }
//     return -1;
// };
var pivotIndex = function (nums) {
    const leftSum = [], rightSum = [];
    const n = nums.length - 1;
    let i = n -1;
    rightSum[n] = 0;
    while (i >= 0) {
        rightSum[i] = rightSum[i + 1] + nums[i + 1];
        i--;
    }
    i = 0;
    while (i <= n) {
        if (i === 0) leftSum[i] = 0;
        else leftSum.push(leftSum[i - 1] + nums[i - 1]);
        if (rightSum[i] === leftSum[i]) return i;
        i++;
    }
    return -1;
};
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]));