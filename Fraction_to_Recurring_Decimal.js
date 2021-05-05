/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let fraction = Math.abs(Math.trunc((numerator / denominator))).toString()
    const sign = (numerator * denominator) < 0;
    if (sign) {
        numerator = Math.abs(numerator);
        denominator = Math.abs(denominator);
    }
    let remainder = numerator % denominator;
    if (remainder === 0) return sign ? `-${fraction}` : fraction;
    fraction+=('.');
    const map = {};
    while (remainder != 0) {
        if (map[remainder]) {
            const idx = map[remainder];
            fraction = fraction.substr(0, idx) + '(' + fraction.substr(idx)+')';
            break;
        }
        map[remainder] = fraction.length;
        remainder *= 10;
        fraction += Math.trunc(remainder/denominator).toString();
        remainder %= denominator;
    }
    return sign ? `-${fraction}` : fraction;
};

console.log(fractionToDecimal(1, 2));
console.log(fractionToDecimal(2, 1));
console.log(fractionToDecimal(2, 3));
console.log(fractionToDecimal(4, 333));
console.log(fractionToDecimal(1, 5));
console.log(fractionToDecimal(1, 6));
console.log(fractionToDecimal(1, 8));
console.log(fractionToDecimal(1, 90));
console.log(fractionToDecimal(-50, 8));
console.log(fractionToDecimal(7, -12))
console.log(fractionToDecimal(-1,-2147483648))
console.log(fractionToDecimal(-2147483648, 1));