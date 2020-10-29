/**Given an array A of non-negative integers, half of the integers in A are odd, and half of the
 * integers are even. Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even,
 *  i is even. You may return any answer array that satisfies this condition. */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let even = 0;
  let odd = 1;
  let res = Array.from({ length: A.length });
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      res[even] = A[i];
      even += 2;
    } else {
      res[odd] = A[i];
      odd += 2;
    }
  }
  return res;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
