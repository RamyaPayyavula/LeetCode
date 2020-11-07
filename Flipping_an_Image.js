/**Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting 
 * image. To flip an image horizontally means that each row of the image is reversed.  For example, 
 * flipping [1, 1, 0] horizontally results in [0, 1, 1]. To invert an image means that each 0 is replaced 
 * by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0]. */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    if (A === null) return [];
    const len = A.reduce((acc,ele)=> acc+1,0);
    let i = 0;
    while (i < len) {
        A[i] = A[i].reverse();
        A[i].forEach((val,j)=> val === 0? A[i][j]=1 : A[i][j]=0)
        i++;
    }
    return A;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));