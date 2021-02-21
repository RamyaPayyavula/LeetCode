/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0]
    return helper(nums,0,nums.length-1)
};

var helper = (nums, left, right) => {
    if (left === right) return nums[left]
    const p = Math.floor((left + right) / 2)

    const leftSum = helper(nums, left, p)
    const rightSum = helper(nums, p + 1, right)
    const combineSum = crossSum(nums, left, right, p)
    return Math.max(leftSum,rightSum,combineSum)
}

var crossSum = (nums, left, right, p) => {
    if (left === right) return nums[left]
    
    let leftSum = -Infinity
    let rightSum = -Infinity
    let currSum = 0;
    for (let i = p; i > left -1; --i){
        currSum += nums[i]
        leftSum = Math.max(leftSum, currSum)
    }
    currSum = 0
    for (let i = p+1; i < right+1; ++i){
        currSum += nums[i]
        rightSum = Math.max(rightSum, currSum)
    }
    return leftSum + rightSum
}

//solution 2
// var maxSubArray = (nums) =>{
//     const n = nums.length;
//     let currSum = nums[0], maxSum = nums[0];

//     for(let i = 1; i < n; ++i) {
//         currSum = Math.max(nums[i], currSum + nums[i]);
//         maxSum = Math.max(maxSum, currSum);
//     }
//     return maxSum;
// }

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([0]))
console.log(maxSubArray([-1]))
console.log(maxSubArray([-100000]))