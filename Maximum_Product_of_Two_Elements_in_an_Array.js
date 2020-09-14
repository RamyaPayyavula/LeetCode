/**Given the array of integers nums, you will choose two different indices i and j of that array.
 * Return the maximum value of (nums[i]-1)*(nums[j]-1). */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const temp = nums.map((i) => i - 1);
  const len = nums.toString().length;
  return temp.reduce((acc, ele, i) => {
    if (i + 1 < len) {
      const max = Math.max(...temp.slice(i + 1, len));
      return acc < max * ele ? max * ele : acc;
    } else {
      return acc;
    }
  }, 0);
};
console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
console.log(maxProduct([3, 7]));
