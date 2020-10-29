/**Given two integer arrays of equal length target and arr. In one step, you can select any
 * non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.
 * Return True if you can make arr equal to target, or False otherwise. */
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  if (arr.length === 0 && target.length === 0) {
    return true;
  } else if (
    (arr.length !== 0 && target.length === 0) ||
    (arr.length === 0 && target.length !== 0)
  ) {
    return false;
  } else {
    arr = arr.sort((a, b) => a - b);
    target = target.sort((a, b) => a - b);
    for (let i = 0; i < target.length; i++) {
      if (target[i] !== arr[i]) {
        return false;
      }
    }
  }
  return true;
};
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
