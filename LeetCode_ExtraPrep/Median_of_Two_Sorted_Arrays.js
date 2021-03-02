/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) { 
    let A = nums1, B = nums2
    const total = (A.length + B.length)
    const half = Math.floor(total/2)
    if (B.length < A.length) {
        [A,B] = [B,A]
    }
    let l = 0, r = A.length - 1
    while (true) {
        i = Math.floor((l + r)/2)
        j = half - i - 2
        const Aleft = i >= 0 ? A[i] : -Infinity
        const Aright = i+1 <A.length ? A[i+1]: Infinity
        const Bleft = j >=0 ? B[j] : -Infinity
        const Bright = j + 1 < B.length ? B[j + 1] : Infinity
        if (Aleft <= Bright && Bleft <= Aright) {
            if (total % 2) {
               return (Math.min(Aright,Bright)).toFixed(5)
            }
            else {
                return ((Math.max(Aleft, Bleft) +  Math.min(Aright,Bright))/2).toFixed(5)
            }
        }
        else if (Aleft > Bright) r = i - 1
        else l = i + 1
    }
}


console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([2, 3, 5, 8], [10, 12, 14, 16, 18, 20]))
console.log(findMedianSortedArrays([2, 3, 5, 8], [10, 12, 14, 16, 18]))