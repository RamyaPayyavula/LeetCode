/**Given an integer n and an integer start.
 * Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
 * Return the bitwise XOR of all elements of nums. */
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(start + 2 * i);
  }
  return arr.reduce((acc, ele) => acc ^ ele, 0);
};

console.log(xorOperation(4, 3));
console.log(xorOperation(5, 0));
console.log(xorOperation(1, 7));
console.log(xorOperation(10, 5));
