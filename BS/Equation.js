/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Given two arrays, write a function to compute their intersection.
 */
var intersection = function(nums1, nums2) {
    const res = nums1.filter((ele)=> nums2.indexOf(ele) !== -1);
    return res.filter((ele,i,res)=> res.indexOf(ele) === i);
};

intersection([4,9,5], [9,4,9,8,4]);