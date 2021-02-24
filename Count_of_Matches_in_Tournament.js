/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let totalMatches = 0
    matches = (N) => {
        if (N === 2) return totalMatches+=1
        if (N < 2) return 0
        if (N % 2 === 0) totalMatches += N / 2
        if (N % 2 === 1) totalMatches += (N - 1) / 2
        const nextRound = Math.floor((N - 1) / 2) + 1
        matches(nextRound)
    }
    matches(n)
    return totalMatches
};

var numberOfMatches = function(n) {
    matches = (N) => {
        let totalMatches
        if (N < 2) return 0
        if (N % 2 === 0) totalMatches = N / 2
        if (N % 2 === 1) totalMatches = (N - 1) / 2
        const nextRound = Math.floor((N - 1) / 2) + 1
        return totalMatches + matches(nextRound)
    }
    return matches(n)
};

console.log(numberOfMatches(7))
console.log(numberOfMatches(14))