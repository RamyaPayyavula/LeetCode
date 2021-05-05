/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  const mod = 1e9 + 7;
  let arr = Array(arrLen).fill(0);
  arr[0] = 1;
  for(let i = 0; i < steps; i++) {
    let newArr = Array(arrLen);
    newArr[0] = (arr[0] + arr[1]) % mod;
    for(let j = 1; j < arrLen - 1; j++) {
      newArr[j] = ((arr[j-1] + arr[j]) % mod + arr[j + 1]) % mod;
    }
    newArr[arrLen-1] = (arr[arrLen-2] + arr[arrLen-1]) % mod;
    arr = newArr;
  }
  return arr[0];
};