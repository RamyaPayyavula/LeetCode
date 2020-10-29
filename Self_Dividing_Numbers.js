/**A self-dividing number is a number that is divisible by every digit it contains.
 * For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
 * Also, a self-dividing number is not allowed to contain the digit zero.
 * Given a lower and upper number bound, output a list of every possible self dividing number,
 * including the bounds if possible. */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const res = [];
  for (let i = left; i <= right; i++) {
    const sd = i
      .toString()
      .split("")
      .reduce((acc, ele) => acc + (i !== 0 ? i % Number(ele) : 1), 0);
    if (sd === 0 && i !== 0) {
      res.push(i);
    }
  }
  return res;
};
console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(0, 22));
console.log(selfDividingNumbers(10, 40));
