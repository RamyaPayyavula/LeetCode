/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let res = [];
    let i = 1, j = 0;
    while (i <= n && j<target.length) {
        if (i === target[j]) {
            j++;
            res.push("Push")
        } else {
            res.push("Push")
            res.push('Pop');
        }
        i++;
    }
    return res;
};


console.log(buildArray([1, 3], 3));
console.log(buildArray([1, 2, 3], 3));
console.log(buildArray([1, 2], 4));
console.log(buildArray([2, 3, 4], 4));
