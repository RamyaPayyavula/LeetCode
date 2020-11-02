/**Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * Note: The number of elements initialized in nums1 and nums2 are m and n respectively.
 * You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2)
    return nums1.sort((a,b)=>a-b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));