/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    let row=0, col = 0
    let res = [];
    while (row < rowLen && col < colLen) { 
        diagonal(matrix, row, col, res);
        if (col + 1 === colLen) {
            row++;
        } else {
            col++;
        }
    }
    return res;
};
function diagonal(matrix, row, col,res) {
    const i = row, j = col;
    let temp = []
    while (row >= 0 && row < matrix.length && col >= 0) {
        temp.push(matrix[row][col]);
        row++;
        col--;
    }
    if ((i+j) % 2 === 0) {
        res.push(...temp.reverse())
    } else {
        res.push(...temp)
    }
}

console.log(findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
console.log(findDiagonalOrder([[2, 2]]));



//var findDiagonalOrder = function (matrix) {
//     if (matrix.length === 0 || matrix[0].length === 0) {
//         return matrix;
//     }
//     const rowLen = matrix[0].length;
//     const colLen = matrix.length;
//     let row=0, col = 0
//     let res = [];
//     while (row < rowLen && col < colLen) { 
//         //using diagonal matrix method
//         let i = row, j = col;
//         let temp = [];
//         console.log(i,j)
//         while (i < rowLen && j >= 0 && i >=0) {
//             temp.push(matrix[i][j]);
//             i++;
//             j--;
//         }
//         if ((row + col) % 2 === 0) {
//             //reverse the direction
//             res.push(...temp.reverse())
//         } else {
//             res.push(...temp)
//         }
//         if (col + 1 === colLen) {
//             row++;
//         } else {
//             col++;
//         }
//     }
//     return res;
// };