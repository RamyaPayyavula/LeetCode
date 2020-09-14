/**Given two lists Aand B, and B is an anagram of A. B is an anagram of A means B is made by randomizing the
 * order of the elements in A.We want to find an index mapping P, from A to B. A mapping P[i] = j means the
 * ith element in A appears in B at index j.These lists A and B may contain duplicates. If there are multiple
 * answers, output any of them. */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function (A, B) {
  const res = [];
  for (let i = 0; i < A.length; i++) {
    const index = B.indexOf(A[i]);
    B[index] = -Infinity;
    res.push(index);
  }
  return res;
};
var anagramMappings = function (A, B) {
  return A.map((i) => B.indexOf(i));
};
console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));
