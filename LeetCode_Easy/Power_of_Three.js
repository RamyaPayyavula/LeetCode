/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    // if(n < 0) return false
    const maxPowerofThreeInteger = Math.pow(3, 20)
    //approach 1 Integer precision
    // return maxPowerofThreeInteger % n === 0 
    //approac 2 base conversion
    // const base3 = n.toString(3)
    // return base3.charAt(0) === '1' && base3.charAt(base3.length-1) === '0'
    //approach 3 logarithamic
    return (Math.log10(n) / Math.log10(3)) % 1 == 0;
};

console.log(isPowerOfThree(27))