/**
 * @param {number[]} nums
 * @return {number}
 */

// var findPeakElement = function (nums) {
//     if (nums.length === 0){
//         return -1;
//     }
    

//     const arr = [...nums]
//     const target = arr.sort((a, b) => b - a)[0]
//     return nums.indexOf(target)
// };

var findPeakElement = function (nums) {
    let max = -Infinity
    let maxIndex = -1
    for (let i = 0; i < nums.length; i++){
        if (max < nums[i]) {
            max = nums[i]
            maxIndex = i
        }
    }
    return maxIndex
};

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([8,1,2,1,3,5,6,4]));
// console.log(findPeakElement([1,2,1,3,5,6,4,7,3,5,9]));