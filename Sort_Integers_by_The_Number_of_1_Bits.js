/**Given an integer array arr. You have to sort the integers in the array in ascending order by the
 * number of 1's in their binary representation and in case of two or more integers have the same
 * number of 1's you have to sort them in ascending order. Return the sorted array. */
/**
 * @param {number[]} arr
 * @return {number[]}
 */

var sortByBits = function (arr) {
  const numOfBits = function (num) {
    // Convert number to binary using toString(radix) function, reduce to 1s
    const bits = num.toString(2).match(/1/g);
    return bits ? bits.length : 0;
  };

  // Sort by number of bits, with secondary sort of val if bits are equal
  return arr.sort((a, b) => numOfBits(a) - numOfBits(b) || a - b);
};
console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
console.log(sortByBits([10000, 10000]));
console.log(sortByBits([2, 3, 5, 7, 11, 13, 17, 19]));
console.log(sortByBits([10, 100, 1000, 10000]));
