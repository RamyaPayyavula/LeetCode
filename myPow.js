/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n===0) return 1;
    let pow = Math.abs(n);
	let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;
    return n < 0 ? 1/result : result;
};

console.log(myPow(2.000,2));
console.log(myPow(2.000, -2));
console.log(myPow(0.00001,2147483647));