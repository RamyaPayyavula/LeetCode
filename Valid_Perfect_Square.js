/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0, right = num
    while (left <= right) {
        const mid = Math.ceil((left + right) / 2)
        if (mid * mid === num) return true
        else if (mid * mid > num) right = mid - 1
        else left = mid+1
    }
    return false
};

console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))