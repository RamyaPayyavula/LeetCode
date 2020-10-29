/**Given an integer n, return a string with n characters such that each character in such string
 * occurs an odd number of times. The returned string must contain only lowercase English letters.
 * sIf there are multiples valid strings, return any of them.  */
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  return n % 2 === 1 ? "p".repeat(n) : "p".repeat(n - 1) + "q".repeat(1);
};

console.log(generateTheString(4));
