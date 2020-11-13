/**You are given an array of distinct integers arr and an array of integer arrays pieces, 
 * where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces
 * in any order. However, you are not allowed to reorder the integers in each array pieces[i].
 * Return true if it is possible to form the array arr from pieces. Otherwise, return false. */
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    for (let i = 0; i < pieces.length; i++){
        let index = arr.indexOf(pieces[i][0])
        if (index !== -1) {
            let j = 1;
            while (j < pieces[i].length) {
                if (pieces[i][j] !== arr[++index]) {
                    return false;
                }
                j++;
            }
        } else {
            return false;
        } 
    }
    return true;
};
console.log(canFormArray([85],[[85]]));
console.log(canFormArray([15,88], [[88],[15]]));
console.log(canFormArray([49,18,16],[[16,18,49]]));
console.log(canFormArray([91,4,64,78],[[78],[4,64],[91]]));
console.log(canFormArray( [1,3,5,7],[[2,4,6,8]]));