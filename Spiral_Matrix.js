/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const row = matrix.length - 1;
    const col = matrix[0].length - 1;
    let i = 0;
    let j = 0;
    let res = []
    if (matrix.length === 0 ) return [];
    if (row === 0) { 
        return matrix[0];
    } if (col === 0) {
        console.log('here')
        return arrayColumn(matrix,0)
    }
    while (i <= row && j <= col) {
        console.log('herereeer',row,col,i,j)
        if (i === Math.floor(row / 2)) {
            res.push(...matrix[i].slice(i, col - i +1));
            return res;
        }
        if (j === Math.floor(col / 2)) {
            right = arrayColumn(matrix, col - i).slice(i + 1, row  - i);
            res.push(...right);
            return res;
        }
        top = matrix[i].slice(i, col - i+1);
        right = arrayColumn(matrix, col - i).slice(i + 1, row - i+1);//matrix[c].slice(i + 1, r - i);
        bottom = matrix[row-i].slice(i, col - i).reverse();
        left = arrayColumn(matrix,  i).slice(i + 1, row - i).reverse();//matrix[j].slice(i, r-i).reverse()
        res.push(...top, ...right, ...bottom, ...left);
        i = i + 1;
        j = j + 1;
    }
    return res;
};

const arrayColumn = (arr, n) => arr.map(x => x[n]);

// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
// console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
// console.log(spiralOrder([[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]))
console.log(spiralOrder([[7], [9], [6]]));
console.log(spiralOrder([[1,2],[3,4]]))

