/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
 isBadVersion = function(version) {
     if (version >=1) {
        return true;
     }
     return false;
 };
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
var solution = function(n) {
        if (n === 0) return -1;
        [left, right] = [1, n]
        while(left <= right){
            const mid = Math.ceil((left + right) / 2)
            if (isBadVersion(mid) && !isBadVersion(mid-1)){
                return mid;
            } else if (isBadVersion(mid)) {
                right = mid -1;
            }
            else{
                left = mid + 1;
            }
        }
            return -1;
    };
// };
// console.log(solution(5))
console.log(solution(1))