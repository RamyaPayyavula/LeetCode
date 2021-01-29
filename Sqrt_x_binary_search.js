/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) {
        return x;
    }
    let left = 1;
    let right = Math.ceil(x / 2);
    while (left <= right) {
        const mid = Math.ceil((left + right) / 2);
        if (mid * mid <= x && (mid +1) * (mid+1) > x) return mid;
        else if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(2147395599));
