/**Given the array nums, for each nums[i] find out how many numbers in the array are smaller
 * than it. That is, for each nums[i] you have to count the number of valid j's such that j != i
 * and nums[j] < nums[i].Return the answer in an array. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  return nums.map((numa) =>
    nums.reduce((total, numb) => (numa > numb ? total + 1 : total), 0)
  );
};

var smallerNumbersThanCurrent = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const max = Math.max(...nums);
    index = nums.indexOf(max);
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (max === nums[j]) {
        count++;
      }
    }
    count = count > 0 ? count - 1 : count;
    nums[index] = -Infinity;
    res[index] =
      i === nums.length - 1 ? nums.length - i - 1 : nums.length - 1 - i - count;
  }
  return res;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
