/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// hamming distance is calculated by calculation xor of two number and return no of of 1's in the result
// Bitwise XORing two numbers results in sum or difference of the numbers
var hammingDistance = function (x, y) {
    const xor = x ^ y
    return xor ? xor.toString(2).replace(/0/g,'').length : 0    
};

console.log(hammingDistance(93, 73))
