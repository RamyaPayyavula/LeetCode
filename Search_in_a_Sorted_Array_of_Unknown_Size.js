/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    
    let [left, right] = [0, 1]
    if (reader.get(0) == target) return 0;
    while (reader.get(right) <= target) {
        left = right
        right=right*2
    }
    while (left <= right) {
        const mid = Math.ceil((left + right) / 2)
        const num = reader.get(mid)
        if (num === target) return mid
        else if (num > target) right = mid -1
        else left = mid+1
    }
    return -1
};

