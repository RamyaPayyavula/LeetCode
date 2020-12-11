/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
if(nums.length == 1) return 1;
var max=0;
var right=0;
var left=0;
for(var i=0; i<nums.length; i++){
right++;
if(nums[i] == 0){
left=right;
right=0;
}
max=Math.max(max, left+right);
}
return max;
};
// console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 1]));