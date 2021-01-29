/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 */
var guess = function (num) {
    if (num === pick) return 0;
    if (pick > num) return 1;
    else return -1;
 }

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    if (n === 0) {
        return n;
    }
    let left = 1;
    let right = n;
    while (left <= right) {
        const mid = Math.ceil((left + right) / 2);
        if (guess(mid) === 0) return mid;
        else if (guess(mid) < 0) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
};

let pick = 6;
console.log(guessNumber(10));
pick = 1;
console.log(guessNumber(1));
pick = 1;
console.log(guessNumber(2));
pick = 2;
console.log(guessNumber(2));