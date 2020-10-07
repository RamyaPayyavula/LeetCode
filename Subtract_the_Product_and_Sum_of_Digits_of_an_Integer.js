/**Given an integer number n, return the difference between
 * the product of its digits and the sum of its digits. */
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arr = Array.from(n.toString());
  const sum = arr.reduce((acc, a) => acc + Number(a), 0);
  const prod = arr.reduce((acc, a) => acc * Number(a), 1);
  return prod - sum;
};
console.log(subtractProductAndSum(234));
