/**Given an array A of non-negative integers, return an array consisting of all the even elements
 * of A, followed by all the odd elements of A. You may return any answer array that satisfies this
 * condition. */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  const even = [];
  const odd = [];
  for (let i = 0; i < A.length; i++) {
    A[i] % 2 === 0 ? even.push(A[i]) : odd.push(A[i]);
  }
  return even.sort().concat(odd.sort());
};

var sortArrayByParity = function (A) {
  return A.sort(function (a, b) {
    return (a % 2) - (b % 2) || a - b;
  });
};
console.log(sortArrayByParity([3, 1, 2, 4]));
