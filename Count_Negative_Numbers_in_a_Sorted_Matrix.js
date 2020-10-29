/**Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.
 * Return the number of negative numbers in grid. */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  return grid.reduce(
    (count, ele) => count + ele.reduce((acc, b) => (b < 0 ? acc + 1 : acc), 0),
    0
  );
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
);
console.log(
  countNegatives([
    [1, -1],
    [-1, -1],
  ])
);
console.log(countNegatives([[-1]]));
