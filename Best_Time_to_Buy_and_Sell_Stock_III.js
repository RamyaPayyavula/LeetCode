/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const rightProfit = [];
    const leftProfit = [];
    const n = prices.length;
    let maxProfitStock = 0;
    let leftMin = prices[0];
    let rightMax = prices[n - 1];
    for (let i = 0; i < n; i++){
        const profit = prices[i] - leftMin;
        leftProfit[i] = Math.max(profit, (leftProfit[i - 1]|| 0));
        leftMin = Math.min(leftMin, prices[i])
        const j = n - 1 - i;
        const temp = rightMax - prices[j];
        rightProfit[j] = Math.max(temp, (rightProfit[j + 1]|| 0));
        rightMax = Math.max(rightMax, prices[j]);
    }
    maxProfitStock = Math.max( maxProfitStock, leftProfit[n-1], rightProfit[0])
    leftProfit.pop();
    rightProfit.shift();
    for (let i = 0; i < leftProfit.length; i++){
        const temp = leftProfit[i] + rightProfit[i];
        maxProfitStock = Math.max(maxProfitStock, temp);
    }
    return maxProfitStock;
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1]));
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));
console.log(maxProfit([3, 2, 6, 5, 0, 3]));
console.log(maxProfit([1, 7, 4, 2, 11]));