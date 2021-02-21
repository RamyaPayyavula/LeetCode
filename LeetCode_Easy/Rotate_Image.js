/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//68 ms, faster than 99.03% of JavaScript & Memory Usage: 38.7 MB, less than 64.84%
var rotate = function(matrix) {
    transpose(matrix)
    reflect(matrix)
    //return matrix
};

var transpose = function (matrix) {
    for (let i = 0; i < matrix.length; i++){
        for (let j = i; j < matrix.length; j++){
            const temp = matrix[j][i]
            matrix[j][i] = matrix[i][j]
            matrix[i][j] = temp
        }
    }
}

var reflect = function (matrix) {
    const n= matrix.length
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix.length/2; j++){
            const temp = matrix[i][j]
            matrix[i][j] = matrix[i][n- j -1]
            matrix[i][n - j -1] = temp
        }
    }
}


console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))