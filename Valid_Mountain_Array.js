/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let temp = undefined;
    let i=0;
    while (i + 1 < arr.length) {
        if (arr[i] >= arr[i + 1]) {
            if (i === 0) {
                return false;
            }
            else {
                 temp = i;
            break;
            }

        }
        i++;
    }
    while (temp!== undefined && temp + 1 < arr.length) {
        if (arr[temp] <= arr[temp + 1]) {
            return false;
        }
        temp++;
    }
    return temp === undefined ? false : true;
};

console.log(validMountainArray([2,1]));
console.log(validMountainArray([3,5,5]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0]));