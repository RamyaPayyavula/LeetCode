/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== i) return i
    }
    return nums.length
};

//best solution here
var missingNumber = function (nums) {
    const n = nums.length
    const sum = n * (n + 1) / 2
    const currsum = nums.reduce((acc,ele)=>acc+ele,0)
    return sum - currsum
};
console.log(missingNumber([3, 0, 1]))
console.log(missingNumber( [0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([0]))
console.log(missingNumber([1,2]))