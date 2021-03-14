/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
    */
    return function (n) {
        let celebrity = 0;
        isCelebrity = (i) => {
            for (let j = 0; j < n; j++) {
                if (i === j) continue;
                if (knows(i, j) || !knows(j, i)) return false;
            }
            return true;
        }
        for (let i = 0; i < n; i++) {
            if (knows(celebrity, i)) {
                celebrity = i;
            }
        }
        if (isCelebrity(celebrity)) {
            return celebrity;
        }
        return -1;
    }; 
};

console.log(solution([[1, 1, 0], [0, 1, 0], [1, 1, 1]]));