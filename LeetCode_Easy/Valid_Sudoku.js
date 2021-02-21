/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var validate = (arr) => {
        return arr.every((a,i)=> isNaN(a) || (arr.indexOf(a) === i && a<=9 && a>=1))
    }
    let boxCol=0
    for (let i = 0; i < 9; i++){
        //row
        const isRowValid = validate(board[i])
        //col
        const boardCol = board.map(d => d[i]);
        const isColValid = validate(boardCol)
        // box
        const boxrow = Math.trunc(i / 3)
        let box = []
        const minRow = boxrow * 3 
        const minCol = boxCol * 3
        boxCol === 2 ? boxCol = 0 : boxCol+=1
        for (let row = minRow; row < minRow+3; row++){
            for (let col = minCol; col < minCol + 3; col++){
                box.push(board[row][col])
            }
        }
        const isBoxValid = validate(box)
        if(!isBoxValid || !isColValid || !isRowValid) return false
    }
    return true
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
, [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))


console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))

    