/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0
    let peak = prices[0]
    let valley = prices[0]
    let maxProfit = 0
    const len = prices.length -1 
    while (i < len) {
        while (i < len && prices[i] >= prices[i + 1]) {
            i++
        }
        valley = prices[i]
        while (i < len && prices[i] <= prices[i + 1]) {
            i++
        }
        peak = prices[i]
        maxProfit += (peak - valley)
    }
    return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))
