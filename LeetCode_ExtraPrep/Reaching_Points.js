/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */

//Repeatedly subtract the smaller of {tx, ty} from the larger of {tx, ty}. 
//The answer is true if and only if we eventually reach sx, sy
var reachingPoints = function (sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        if (tx === sx && ty === sy) return true
        if (tx > ty) tx -= ty;
        else ty -= tx;
    }
    return false
};


/**
 * Say tx > ty. We know that the next parent operations will be to subtract ty 
 * from tx, until such time that tx = tx % ty. When both tx > ty and ty > sy, 
 * we can perform all these parent operations in one step, replacing 
 * while tx > ty: tx -= ty with tx %= ty. Otherwise, if say tx > ty and ty <= sy, 
 * then we know ty will not be changing (it can only decrease). Thus, only tx will 
 * change, and it can only change by subtracting by ty. Hence, (tx - sx) % ty == 0 
 * is a necessary and sufficient condition for the problem's answer to be True.
 * The analysis above was for the case tx > ty, but the case ty > tx is similar. 
 * When tx == ty, no more moves can be made.
 */

var reachingPoints = (sx, sy, tx, ty) => {
    while (tx >= sx && ty >= sy) {
        if (tx == ty) break;
        if (tx > ty) {
            if (ty > sy) tx %= ty;
            else return (tx - sx) % ty == 0;
        } else {
            if (tx > sx) ty %= tx;
            else return (ty - sy) % tx == 0;
        }
    }
    return (tx == sx && ty == sy);
}


console.log(reachingPoints(1, 1, 3, 5))
console.log(reachingPoints(1, 1, 2, 2))
console.log(reachingPoints(1, 1, 1, 1))
console.log(reachingPoints(3, 3, 12, 9))
