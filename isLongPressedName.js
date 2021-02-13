/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if ((name.length === typed.length) && name === typed) return true
    let i = 0, j=0;
    while (i < typed.length && j < name.length) {
        if (i === 0 && j === 0 && name[j] !== typed[i]) return false
        if (typed[i] === name[j]) {
            i++
            j++
        }
        if (i > 0 && typed[i] === typed[i - 1] && typed[i] !== name[j]) {
            i++;
        }
        if (i > 0 && typed[i] !== typed[i - 1] && typed[i] !== name[j]) return false
    }
    return true;
};

console.log(isLongPressedName("alex", "aaleex"))
console.log(isLongPressedName("saeed", "ssaaedd"))
console.log(isLongPressedName("leelee", "lleeelee"))
console.log(isLongPressedName("laiden", "laiden"))