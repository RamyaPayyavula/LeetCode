/**
 * @param {number[]} nums
 * @return {number}
 */
//84ms fastre than 87%
var singleNumber = function (nums) {
    const hash = {}
    for (let i = 0; i < nums.length; i++){
        hash[nums[i]] = (hash[nums[i]] || 0) + 1
    }
    for (key in hash) {
        if(hash[key] === 1) return key
    }
};

//80ms faster than 93.86%
var singleNumber = function (nums) {
    const hash = new Set(nums)
    const sum = nums.reduce((a,b)=> a+b,0)
    const distinctSum = [...hash].reduce((a, b) => a + b, 0)
    return 2 * distinctSum - sum
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))