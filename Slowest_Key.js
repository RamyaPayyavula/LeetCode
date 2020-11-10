/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let resCha 
    let resTimes = 0;
    if (releaseTimes.length !== keysPressed.length) return null;
    let i = 0;
    while (i < keysPressed.length) {
        const start = i === 0 ? 0 : releaseTimes[i - 1];
        const end = releaseTimes[i];
        if (resTimes < (end - start)) {
            resTimes = end - start;
            resCha = keysPressed[i];
        }
        if (resTimes === (end - start)) {
            resCha = resCha > keysPressed[i] ? resCha : keysPressed[i];
        }
        i++;
    }
    return resCha;
};

console.log(slowestKey([9, 29, 49, 50], "cbcd"));
console.log(slowestKey([12, 23, 36, 46, 62], "spuda"));