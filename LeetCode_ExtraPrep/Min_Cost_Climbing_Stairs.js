/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const n= cost.length
    if(n < 1) return 0
    if(n === 1) return cost[0]
    let i=2
    let dp = []
    dp[0] = cost[0]
    dp[1] = cost[1]
    while (i < n) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
        i++
    }
    return Math.min(dp[n-2],dp[n-1])
};


var minCostClimbingStairs = (cost) =>{
    let len = cost.length;
    for (let i = 2; i < len; i++) {
        cost[i] += Math.min(cost[i-1], cost[i-2]);
    }
    return Math.min(cost[len-1], cost[len-2]);
}

console.log(minCostClimbingStairs([10, 15, 20]))
console.log(minCostClimbingStairs( [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))