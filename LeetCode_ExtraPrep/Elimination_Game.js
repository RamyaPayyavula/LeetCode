/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let start = 1, diff = 1, direction = false;
    while(n > 1) {
        if(n % 2 === 1 || direction === false) {
            start += diff;
        }
        n = Math.floor(n / 2);
        diff *= 2;
        direction = !direction;
    }
    return start;
};

console.log(lastRemaining(9))