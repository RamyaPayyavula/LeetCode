/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let res = [], i = 0;
    while (i < ops.length) {
        const ele = ops[i];
        if (isNaN(ele)) {
            if (ele === "+") res.push(res[res.length - 1] + res[res.length - 2]);
            else if (ele === "D") res.push(res[res.length - 1] * 2);
            else if (ele === "C") res.pop();
        } else res.push(Number(ele));
        i++;
    }
    return res.reduce((acc, ele) => acc + ele, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1"]));