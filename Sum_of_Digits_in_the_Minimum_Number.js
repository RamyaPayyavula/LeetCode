/**Given an array A of positive integers, let S be the sum of the digits of the minimal element of A.
 * Return 0 if S is odd, otherwise return 1. */
/**
 * @param {number[]} A
 * @return {number}
 */
var sumOfDigits = function (A) {
  return Math.min(...A)
    .toString()
    .split("")
    .reduce((acc, ele) => Number(ele) + acc, 0) %
    2 ===
    1
    ? 0
    : 1;
};

console.log(sumOfDigits([1]));
console.log(sumOfDigits([99, 77, 33, 66, 55]));
console.log(sumOfDigits([34, 23, 1, 24, 75, 33, 54, 8]));
