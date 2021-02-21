
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    var possible = function (guess) {
        count = left = 0
        for (right, x in enumerate(nums)) {
            while (x - nums[left] > guess)
                left += 1
            count += right - left
        }
        return count >= k
    }
    nums.sort()
    lo = 0
    hi = nums[-1] - nums[0]
    while (lo < hi) {
        const mi = (lo + hi) / 2
        if(possible(mi))
            hi = mi
        else lo = mi + 1 
    }
    return lo
};

console.log(smallestDistancePair([1,3,1],1))