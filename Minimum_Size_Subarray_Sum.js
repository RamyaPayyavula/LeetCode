/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//better solution 
var minSubArrayLen = function(s, nums) {
    let result = Number.MAX_SAFE_INTEGER
    let sum = 0, left = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        while(sum >= s){
            result = Math.min(result, i - left + 1)
            sum -= nums[left++]
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result 
};


var minSubArrayLen = function (s, nums) {
    let result = Infinity;
    for (let i = 0; i < nums.length; i++){
        j = i + 1;
        let sum = nums[i];
        while (s > sum && j<nums.length) {
            sum += nums[j];
            j++;
        }
        if (sum >= s) result = Math.min(result, j - i);
    }
    return result !== Infinity ? result : 0;
}
console.log(minSubArrayLen(46, [2,3,1,2,4,3]))