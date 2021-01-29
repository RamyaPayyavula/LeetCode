/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     if (nums.length === 0) {
//         return n;
//     }
//     let start = 0;
//     let end = nums.length-1;
//     while (start <= end) {
//         const mid = start + (end - start) / 2;
//         if (nums[mid] === target) return mid;
//         else if (nums[mid] >= nums[start]) {
//             if (target >= nums[start] && target < nums[mid]) end = mid - 1;
//             else start = mid + 1;
//         }
//         else {
//             if (target <= nums[end] && target > nums[mid]) start = mid + 1;
//             else end = mid - 1;
//         }
//     }
//     return -1;
// };

var search = function(nums, target) {
    return searchIndex(nums, target, 0, nums.length - 1);
};

function searchIndex(nums, target, start, end) {
    if (start >= end) {
         if (nums[end] == target) {
            return end;
         } else {
             return -1;
         }
    }
    
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] == target) {
        return mid;
    } else if ((nums[mid] > nums[start] && nums[mid] > target && target >= nums[start]) || 
               (nums[mid] < nums[start] && !(target > nums[mid] && target <= nums[end]))){        
        return searchIndex(nums, target, start, mid);
    } else {
        return searchIndex(nums, target, mid + 1, end);
    }
}
console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1], 0))
console.log(search([1], 1))
console.log(search([1,3],1))