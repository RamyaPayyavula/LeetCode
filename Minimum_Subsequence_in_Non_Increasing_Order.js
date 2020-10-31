/**Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater
 * than the sum of the non included elements in such subsequence. If there are multiple solutions,
 * return the subsequence with minimum size and if there still exist multiple solutions, return the
 * subsequence with the maximum total sum of all its elements.A subsequence of an array can be obtained
 * by erasing some (possibly zero) elements from the array. Note that the solution with the given
 * constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  const totalSum = nums.reduce((acc, ele) => acc + ele, 0);
  for (let i = 0; i < nums.length; i++) {
    const tempSum = nums.slice(0, i + 1).reduce((acc, ele) => acc + ele, 0);
    if (2 * tempSum - totalSum > 0) {
      return nums.slice(0, i + 1);
    }
  }
};
console.log(minSubsequence([4, 3, 10, 9, 8]));
console.log(minSubsequence([4, 4, 7, 6, 7]));
console.log(minSubsequence([6]));
console.log(minSubsequence([7, 4, 2, 8, 1, 7, 7, 10]));
