/**Given an array of integers nums. A pair (i,j) is called good if nums[i] == nums[j] and i < j.
 * Return the number of good pairs. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  if (1 <= nums.length && nums.length <= 100) {
    var res = {};
    let gp = 0;

    for (let i in nums) {
      if (1 <= nums[i] && nums[i] <= 100) {
        const num = nums[i];
        res[num] = (res[num] || 0) + 1;
      }
    }
    for (let key in res) {
      gp = gp + (res[key] * (res[key] - 1)) / 2;
    }
    return gp;
  }
};

const numIdenticalPairs = (nums) =>
  [
    ...nums
      .reduce((map, n) => map.set(n, (map.get(n) || 0) + 1), new Map())
      .values(),
  ].reduce((sum, cnt) => (sum += (cnt * (cnt - 1)) / 2), 0);

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
