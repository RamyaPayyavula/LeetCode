/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //DFS Backtracking
    coinsNeeded = (rem, memo = []) => {
        if (rem === 0) return 0
        if (rem < 0) return -1
        if (memo[rem - 1] && memo[rem - 1] !== 0) return memo[rem - 1]
        let min = Infinity
        for (let i = 0; i < coins.length; i++) {
            let res = coinsNeeded(rem - coins[i], memo)
            if (res >= 0 && res < min)
                min = res + 1
        }
        memo[rem - 1] = (min === Infinity) ? -1 : min
        return memo[rem-1]           
    }
    return coinsNeeded(amount, [])
};

//Dynamic programming approach
var coinChange = function(coins, amount) {
    let dp = Array.from({ length: amount+1 }).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i < amount+1; i++) {
        for (let x = 0; x < coins.length; x++){
            if (i - coins[x] >= 0)
                dp[i] = Math.min(dp[i], dp[i - coins[x]] + 1)
        }
    }
    return dp[amount] < Infinity ? dp[amount] : -1
};


// console.log(coinChange([2, 1, 5], 11))
// console.log(coinChange([2], 3))
// console.log(coinChange([1], 0))
// console.log(coinChange([1], 1))
// console.log(coinChange([1],2))
console.log(coinChange([1,3,5],8))