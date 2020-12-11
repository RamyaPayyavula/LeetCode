/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    if (arr.indexOf(0) === -1) {
        return null;
    }
    const len = arr.length
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (i < len) {
            if (arr[i] === 0) {
                arr.splice(i, 0, 0);
                count++;
                i++;
            }
        } else { 
            arr.splice(len,len+count)
        }
    }
    return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([1, 2, 3]));