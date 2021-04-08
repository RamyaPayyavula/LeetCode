/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const res = [];
    let i = 0;
    while (i < nums1.length) {
        let idx = nums2.indexOf(nums1[i]);
        while (idx >= 0 && idx < nums2.length && nums1[i] >= nums2[++idx]) {
        }
        if(idx === nums2.length || nums1[i] > nums2[idx]) res.push(-1);
        else res.push(nums2[idx]);
        i++;
    }
    return res;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));