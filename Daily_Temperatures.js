/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let res=[]
    for (let i = 0; i < T.length; i++) {
        for (let j = i + 1;j < T.length; j++){
            if (T[i] < T[j]) {
                res.push(j - i)
                break;
            } else {
                if(j===T.length-1) res.push(0)
            }
        }
    }
    res.push(0)
    return res
};



console.log(dailyTemperatures( [73, 74, 75, 71, 69, 72, 76, 73]))