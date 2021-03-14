/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//two pointer problem: working but time limit exceeds for bigger problems
// var minWindow = function(s, t) {
//     if (s.length < t.length) return "";
//     let left = 0, right = t.length - 1, res = "";
//     const hashT = {}
//     let j = 0;
//     while (j < t.length) {
//         hashT[t.charAt(j)] = (hashT[t.charAt(j)] || 0) + 1;
//         j++;
//     }
//     isTStringInTheWindow = (str) => {
//         for (idx in hashT) {
//             const re = new RegExp(idx, "g");
//             const count = (str.match(re) &&  str.match(re).length) || 0;
//             if (hashT[idx] > count) return false;
//         }
//         return true;
//     }
//     while (left < s.length && right < s.length) {
//         const str = s.substr(left, right - left + 1);
//         if (str.length >= t.length && isTStringInTheWindow(str)) {
//             res = res.length > 0 && res.length < str.length ? res : str;
//             left++;
//         } else right++;
//     }
//     return res
// };


var minWindow = function(s, t) {
    if (s.length < t.length) return "";
    let left = 0, res = "";
    const matchSet = new Array(128).fill(0)
    let missing = t.length;
    for (let j = 0; j < t.length;j++) {
        matchSet[t.charCodeAt(j)] = (matchSet[t.charCodeAt(j)] || 0) + 1;
    }

    for (let right = 0; right < s.length && left < s.length; right++) {
        if (matchSet[s.charCodeAt(right)] > 0) {
            missing--;
        }
        matchSet[s.charCodeAt(right)]--;
        while (missing === 0) {
            const str = s.substr(left, right - left + 1);
            matchSet[s.charCodeAt(left)]++;
            res = res.length > 0 && res.length < str.length ? res : str;
            if (matchSet[s.charCodeAt(left)] > 0) {
                missing++;
            }
            left++;
        }
    }
    return res
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("ADOBECODEBPQANPQRCC", "ABC"));
console.log(minWindow("aa", "aa"));
console.log(minWindow("acbbaca", "aba"));

