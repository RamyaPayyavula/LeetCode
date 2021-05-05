/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
    if (nums.length % k !== 0) return false;
    let hash = {}, set = new Set(nums);
    for (let i = 0; i < nums.length; i++){
        hash[nums[i]] = (hash[nums[i]] || 0) + 1;
    }
    let count = nums.length / k;
    while (count--) {
        const min = Math.min(...set);
        for (let i = min; i < min + k; i++){
            if (!hash[i]) return false;
            if (--hash[i] === 0) set.delete(i);
        }
    }
    return true;
};
//O(nk) 

console.log(isPossibleDivide([1, 2, 3, 3, 4, 4, 5, 6], 4));
console.log(isPossibleDivide([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3));
console.log(isPossibleDivide([3, 3, 2, 2, 1, 1], 3));
console.log(isPossibleDivide([1,2,3,4],3))