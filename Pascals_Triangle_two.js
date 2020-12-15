/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1]
    }
    if (rowIndex > 0) {
        let a = [1]
        let p = getRow(rowIndex - 1)
        for (let i = 1; i < rowIndex; i++) {
            a[i] = p[i - 1] + p[i]
        }
        a.push(1)
        return a
    }
};