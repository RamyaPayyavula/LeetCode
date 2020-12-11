/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const temp = Array.from(heights);
    heights.sort((a, b) => a - b)
    let i = 0, swaps = 0;
    while (i < heights.length) {
        if (temp[i] !== heights[i]) {
            swaps++;
        }
        i++;
    }
    return swaps;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5,1,2,3,4]));
console.log(heightChecker([1,2,3,4,5]));
