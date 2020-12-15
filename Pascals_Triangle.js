/**
 * @param {number} numRows
 * @return {number[][]}
 */
// var generate = function (numRows) {
//     if (numRows === 0)
//         return []
//     if (numRows === 1)
//         return [1];
//     if (numRows === 2)
//         return[[1],[1,1]]
//     let res=[[1],[1,1]]
//     for (let i = 2; i < numRows; i++){
//         let newRow = [1]
//         const previousRow = res[res.length-1]
//         for (let j = 0; j < i-1; j++){
//             let current = previousRow[j];
//             let next = previousRow[j + 1];
//             newRow.push(current + next);
//         }
//         newRow.push(1);
//         res.push(newRow);
//     }  
//     return res;
// };


let generate = function(numRows) {
    let final=[];
    for(let i=0;i<numRows;i++){
        final[i]=[];
        final[i][0]=final[i][i]=1;
        for(let j=1;j<i;j++){
            final[i][j]=final[i-1][j]+final[i-1][j-1];
        }
    }
    return final;
};

console.log(generate(5))