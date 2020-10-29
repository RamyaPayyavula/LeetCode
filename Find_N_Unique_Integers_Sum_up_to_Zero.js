/**Given an integer n, return any array containing n unique integers such that they add up to 0. */
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const res = [];
  if (n === 0) {
    return [0];
  }
  if (n % 2 === 1) {
    res.push(0);
    n = n - 1;
  }
  for (let i = 1; i <= n / 2; i++) {
    res.push(i);
    res.push(-i);
  }
  return res;
};
console.log(sumZero(5));
console.log(sumZero(0));
console.log(sumZero(3));
console.log(sumZero(4));
