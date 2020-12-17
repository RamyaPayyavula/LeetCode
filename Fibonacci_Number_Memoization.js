/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let cahce = {}
    let result
    if (n in cahce) return cahce[n];
    if (n < 2) result = n;
    else result = fib(n - 1) + fib(n - 2);
    cahce[n] = result;
    return result;
};

console.log(fib(4));