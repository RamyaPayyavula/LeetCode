/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const res = {}
    const n = highLimit - lowLimit + 1
    let i = 0
    let currentBall = lowLimit
    let maxCount = 0
    let maxBoxNumber= 0
    while (i < n) {
        const sumDigits = currentBall.toString().split("").reduce((acc, ele) => Number(ele) + acc, 0)
        res[sumDigits] = (res[sumDigits] || 0) + 1
        if (res[sumDigits] > maxCount) {
            maxCount = res[sumDigits]
            maxBoxNumber = sumDigits
        }
        currentBall = currentBall+1
        i++;
    }
    return maxCount 
};

console.log(countBalls(1, 10))
console.log(countBalls(5, 15))
console.log(countBalls(19,28))