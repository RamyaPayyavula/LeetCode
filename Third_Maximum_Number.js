/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums = nums.filter(function(el,i,a){return i===a.indexOf(el)}).sort((a, b) => b - a);;
    if(nums.length < 3) return nums[0]
    return nums[2];
};
console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));