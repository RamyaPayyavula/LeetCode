/**Given a string s and an integer array indices of the same length.
 *The string s will be shuffled such that the character at the ith position moves to indices[i]
 *in the shuffled string.Return the shuffled string. */
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const arr = [];
  if (s.length === 0 || indices.length === 0 || s.length !== indices.length) {
    return [];
  }
  for (let i in s) {
    arr[indices[i]] = s[i];
  }
  return arr.join("");
};

var restoreString = function (s, indices) {
  const arr = [];
  if (s.length === 0 || indices.length === 0 || s.length !== indices.length) {
    return [];
  }
  indices.map((i) => (arr[indices[i]] = s[i]));
  return arr.join("");
};
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString("abc", [0, 1, 2]));

console.log(restoreString("aiohn", [3, 1, 4, 2, 0]));
console.log(restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5]));
console.log(restoreString("art", [1, 0, 2]));
