/**We are given a list nums of integers representing a list compressed with run-length encoding.
 * Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each
 * such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists
 * from left to right to generate the decompressed list. Return the decompressed list. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let arr = [];
  if (nums.length % 2 !== 0) {
    return arr;
  }
  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    arr.push(...new Array(freq).fill(val));
  }
  return arr;
};

console.log(decompressRLElist([1, 2, 3, 4]));
console.log(decompressRLElist([1, 1, 2, 3]));
