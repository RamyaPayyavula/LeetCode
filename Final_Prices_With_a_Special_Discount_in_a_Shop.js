/**Given the array prices where prices[i] is the price of the ith item in a shop. There is a 
 * special discount for items in the shop, if you buy the ith item, then you will receive a 
 * discount equivalent to prices[j] where j is the minimum index such that j > i and 
 * prices[j] <= prices[i], otherwise, you will not receive any discount at all. Return an array 
 * where the ith element is the final price you will pay for the ith item of the shop considering
 * the special discount. */

 /**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices1 = function(prices) {
    let res = []
    for (let i = 0; i < prices.length-1; i++){
        let min = 0;
        for (let j = i + 1; j < prices.length; j++){
            if (prices[i] >= prices[j]) {
                min = prices[j];
                break;
            }
        }
        res.push(prices[i]-min)
    }
    res.push(prices[prices.length - 1])
    return res;
};

var finalPrices = function (prices) {
    return prices.map((price, i) => price - (prices[prices.findIndex((p, j) => i < j && prices[i] >= prices[j])] || 0))
}
console.log(finalPrices([8,4,6,2,3]));
console.log(finalPrices([1,2,3,4,5]));
console.log(finalPrices([10,1,1,6]));