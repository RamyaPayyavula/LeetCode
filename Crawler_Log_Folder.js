/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let res = 0;
    for (let i = 0; i < logs.length; i++){
        if (logs[i].indexOf('/') !== -1 && logs[i] !== "./" && logs[i] !== "../") res++;
        if (logs[i] === "../") {
            res > 0 ? res-- : res;
        }
    }
    return res;
};

console.log(minOperations(["d1/","d2/","../","d21/","./"]));
console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]));
console.log(minOperations(["d1/","../","../","../"]));