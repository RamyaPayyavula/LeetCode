/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let arr = n.toString(2).split('').reverse();
    return arr.push.apply( arr, new Array(32 - arr.length).fill(0) ) && parseInt(arr.join(''), 2);
}

var reverseBits = function(n) {
    var result = 0;
    var count = 32;

    while (count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;
};

console.log(reverseBits(00000010100101000001111010011100))