/**Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0. */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    //converting binary to decimal
    var dec = BigInt('0b'+a) + BigInt('0b'+b);
    //converting deciaml to binary
    return dec.toString(2)
};

console.log(addBinary('11','10'))