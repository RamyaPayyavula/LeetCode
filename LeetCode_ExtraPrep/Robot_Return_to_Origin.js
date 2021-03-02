/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let hash = {}
    for (let i = 0; i < moves.length; i++){
        const ch = moves.charAt(i)
        hash[ch] = (hash[ch] || 0) + 1
    }
    if (hash['L'] === hash['R'] && hash['U'] === hash['D']) return true
    else return false
};

console.log(judgeCircle('LL'))