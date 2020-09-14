/**Given a square matrix mat, return the sum of the matrix diagonals.Only include the sum of all the
 * elements on the primary diagonal and all the elements on the secondary diagonal that are not part
 * of the primary diagonal. */
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const oddMatrix = mat.length % 2 === 1 && mat[0].length % 2 === 1;
  return mat.reduce((acc, ele, i) => {
    return oddMatrix && Math.floor(mat.length / 2) === i
      ? acc + ele[i]
      : acc + ele[i] + ele[mat.length - 1 - i];
  }, 0);
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
console.log(diagonalSum([[5]]));
