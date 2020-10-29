/**Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
 * A subarray is a contiguous subsequence of the array. Return the sum of all odd-length subarrays
 * of arr. */
/**
 * @param {number[]} arr
 * @return {number}
 */
// var sumOddLengthSubarrays = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let subSum = 0;
//     for (let j = i; j < arr.length; j++) {
//       subSum += arr[j];
//       if ((j - i) % 2 === 0) {
//         sum += subSum;
//       }
//     }
//   }
//   return sum;
// };

//solved using sliding window
var sumOddLengthSubarrays = function (arr) {
  let windowSize = 1;
  let sum = 0;

  while (windowSize <= arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (i + windowSize > arr.length) {
        break;
      }
      sum += arr.slice(i, i + windowSize).reduce((a, b) => {
        return a + b;
      }, 0);
    }
    windowSize += 2;
  }

  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
