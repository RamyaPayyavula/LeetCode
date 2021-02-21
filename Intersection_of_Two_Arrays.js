/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let res = []
    let obj={}
    for (num in nums1) {
        obj[nums1[num]] = (obj[nums1[num]] || 0) + 1
    }
    for (num in nums2) {
        if (obj[nums2[num]]) {
            res.push(nums2[num])
            obj[nums2[num]] = 0
        }
    }
    return res
};

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection( [4,9,5],[9,4,9,8,4]))