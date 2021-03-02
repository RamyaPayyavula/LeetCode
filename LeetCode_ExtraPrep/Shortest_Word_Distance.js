/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (words, word1, word2) {
    let idx1 =-1, idx2=-1, minDistance = words.length
    for (let i = 0; i < words.length; i++){
        if (words[i] === word1) idx1 = i
        else if (words[i] === word2) idx2 = i
        if (idx1 !== -1 && idx2 !== -1) {
            console.log(minDistance, idx1, idx2)
            minDistance = Math.min(minDistance, Math.abs(idx1-idx2))
        }
    }
    return minDistance
};