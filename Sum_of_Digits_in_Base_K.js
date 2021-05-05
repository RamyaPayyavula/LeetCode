/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let inBaseK = n.toString(k);
    let sum = 0;
    while (inBaseK > 0) {
        sum += inBaseK % 10;
        inBaseK = Math.floor(inBaseK / 10);
    }
    return sum
};


console.log(sumBase(34, 6));