/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let result=0;
    const arr = Array.from(Array(n), () => new Array(m).fill(0))
    for(let i=0; i< indices.length ; i++){
        const [r,c] = indices[i];
        for(let j=0; j<m;j++){
            arr[r][j] = arr[r][j] + 1;
        }
        for(let j=0; j<n;j++){
            arr[j][c] = arr[j][c] + 1;
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            result = result + arr[i][j] % 2;
        }
    }
    return result;
};

oddCells(2,3, [[0,1],[1,1]]);
