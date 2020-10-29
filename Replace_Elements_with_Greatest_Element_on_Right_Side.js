/**Given an array arr, replace every element in that array with the greatest element among the
 * elements to its right, and replace the last element with -1. After doing so, return the array. */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
  let lastMax = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const val = arr[i];
    if (!arr[i + 1]) {
      arr[i] = lastMax;
      lastMax = val;
    } else {
      arr[i] = lastMax;
      lastMax = Math.max(lastMax, val);
    }
  }
  return arr;
};
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
console.log(replaceElements([400, -1]));
