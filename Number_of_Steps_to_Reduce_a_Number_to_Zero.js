/**Given a non-negative integer num, return the number of steps to reduce it to zero. If the
 * current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it. */
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
      count += 1;
    } else {
      count += num === 1 ? 1 : 2;
      num = (num - 1) / 2;
    }
  }
  return count;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(123));
