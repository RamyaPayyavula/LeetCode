/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            const ele= arr.indexOf(arr[i]/2)
            if (ele !== -1 && ele !==i) {
                return true;
            }
        } 
        i++;
    }
    return false;
};

console.log(checkIfExist([10,2,5,3]));
console.log(checkIfExist([7,1,14,11]));
console.log(checkIfExist([3,1,7,11]));