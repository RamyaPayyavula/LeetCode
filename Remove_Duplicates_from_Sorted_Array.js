/** Given a sorted array nums, remove the duplicates in-place such that each element appears only once 
 * and returns the new length. Do not allocate extra space for another array, you must do this by
 * modifying the input array in-place with O(1) extra memory. */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     let max = nums.length;
//     let i = 0;
//     while (i < max) {
//        if (nums.slice(0, i).indexOf(nums[i]) !== -1) {
//             nums.splice(i, 1);
//             max = max - 1;
//             i = i - 1;
//         }
//         i = i + 1;
//     }
//     return nums.length      
// };

// var removeDuplicates = function (nums) {
//     return nums.reduce((acc, ele, i) => {
//         if (acc.indexOf(ele) === -1)
//             acc.push(ele);
//         return acc;
//     }, [])
// }
var removeDuplicates = function (nums) { 
    let i = 0, j = 1;
    const len = nums.length
    while (i < len && j < len) {
        if (nums[i] !== nums[j]) {
            nums[i + 1] = nums[j];
            i++;
            j++;
        } else {
            j++;
        }
    }
    nums.splice(i+1, len);
    return nums
}

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([1, 2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
