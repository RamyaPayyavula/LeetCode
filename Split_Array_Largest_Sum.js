/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    nums.sort((a, b) => a - b)
    const len = nums.length
    const maxSubArr = len - m
    const totalSum = nums.reduce((acc, ele) => acc + ele, 0)
    if(m === 1) return totalSum
    let max = 0
    let j = len - 1
    console.log(len,m,maxSubArr)
    for (let i = 0; i < maxSubArr; i++){
        console.log('here',nums[j])
        const subsum = totalSum
        max = max + nums[j]
        if (max > (subsum - max)) {
            return max
        }
        j--
    }
    return nums[len-1]
};

// console.log(splitArray([1, 2, 3, 4, 5], 1))
console.log(splitArray([2, 16, 14, 15], 2))
// console.log(splitArray([7, 2, 5, 10, 8],2))
// console.log(splitArray([1, 2, 3, 4, 5], 2))
// console.log(splitArray([1, 4, 4], 3))