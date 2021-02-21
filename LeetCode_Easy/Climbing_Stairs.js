/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let result = resolve(n, []);
  return result;
};

function resolve(n, memory) {
  if (memory[n]) {
    return memory[n];
  }
  if (n == 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  let result = resolve(n - 1, memory) + resolve(n - 2, memory);
  memory[n] = result;
  return result;
}