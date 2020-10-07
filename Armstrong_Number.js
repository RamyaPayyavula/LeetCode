/**The k-digit number N is an Armstrong number if and only if the k-th power of each digit sums to N.
 * Given a positive integer N, return true if and only if it is an Armstrong number. */
/**
 * @param {number} N
 * @return {boolean}
 */
var isArmstrong = function (N) {
  const len = N.toString().length;
  const res = N.toString()
    .split("")
    .reduce((acc, ele) => acc + Math.pow(ele, len), 0);
  return N === res;
};

console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(2));
