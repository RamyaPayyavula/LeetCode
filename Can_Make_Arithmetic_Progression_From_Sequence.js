/**Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the
 * difference between any two consecutive elements is the same. Return true if the array can be
 * rearranged to form an arithmetic progression, otherwise, return false. */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  if (arr.length < 3) return true;
  arr.sort((a, b) => {
    return a - b;
  });
  let diff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
console.log(canMakeArithmeticProgression([-68, -96, -12, -40, 16]));
