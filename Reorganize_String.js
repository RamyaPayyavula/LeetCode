/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    if (!S.length) return "";
    let hash = {};
    for (let i = 0; i < S.length; i++){
        const ch = S.charAt(i);
        hash[ch] = (hash[ch] || 0) + 1;
    }
    const maxCount = Math.floor((S.length + 1) / 2);
    const isNotPossible = false;
    for (key in hash) {
        if (hash[key] > maxCount) isNotPossible = true;
    }
    if (isNotPossible) return "";
};

console.log(reorganizeString("aab"));
console.log(reorganizeString("aaab"));