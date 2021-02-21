/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const num = []
    const len1 = nums1.length
    const len2 = nums2.length
    let j = 0, i = 0
    while (i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            num.push(nums1[i])
            i++
        } else {
            num.push(nums2[j])
            j++
        }
    }
    while (i < len1) {
        num.push(nums1[i])
        i++
    }
    while (j < len2) {
        num.push(nums2[j])
        j++
    }
    const mid = Math.floor(num.length/2)
    if (num.length % 2 === 0) return ((num[mid] + num[mid-1])/2).toFixed(5)
    else return num[mid].toFixed(5)
};

console.log(findMedianSortedArrays([1,3],[2]))
console.log(findMedianSortedArrays([1,2],[3,4]))
console.log(findMedianSortedArrays([0,0],[0,0]))
console.log(findMedianSortedArrays([],[1]))
console.log(findMedianSortedArrays([2], []))
console.log(findMedianSortedArrays([1, 3], [2, 7]))
console.log(findMedianSortedArrays([100],[101]))