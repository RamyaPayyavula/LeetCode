/** You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 3) return n;
    let arr = [1,2,3]
    for (let i = 3; i <= n-1; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
};

console.log(climbStairs(2));
console.log(climbStairs(45));






