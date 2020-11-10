/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(str) {
    let max = 0;
    let maxDepthPar = -1;
    for(const char of str) {
        if (char == "(") {
            max++;
        } else if(char == ")") {
            max--;
        }
        if (max > maxDepthPar) {
            maxDepthPar = max;
        }
    }
    return maxDepthPar;
};

// console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("(1)+((2))+(((3)))"));
// console.log(maxDepth("1+(2*3)/(2-1)"));
// console.log(maxDepth("1"));