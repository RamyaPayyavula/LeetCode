/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length
    const n = board[0].length
    const indexes = [[0, 1], [-1, 0], [0, -1], [1, 0]]
    var backtrack = (row,col,suffix) => {
        if (suffix.length === 0) return true
        if(row < 0 || row === m || col < 0 || col === n || board[row][col] != suffix[0])
            return false
        board[row][col] = '#'
        for (let i in indexes) {
            const rowOffset = indexes[i][0] , colOffset = indexes[i][1]
            if(backtrack(row + rowOffset, col + colOffset, suffix.slice(1)))
                return true
        }
        board[row][col] = suffix[0]
    }
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if(backtrack(i,j,word)) return true
       }
    }
    return false
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))