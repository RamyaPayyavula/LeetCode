/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length-1; i++){
        if (nums[i] === nums[i + 1]) return true
    }
    return false
};

var containsDuplicate = function (nums) {
    const hash = {}
    for (let i = 0; i < nums.length; i++){
        if (hash[nums[i]]) return true
        else hash[nums[i]] = 1
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
