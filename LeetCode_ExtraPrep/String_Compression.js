/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    if(chars.length === 1) return 1
    let n = chars.length
    let i = 0
    let j = 0
    while (i < n && j<n) {
        let g = 1
        let ch = chars[i]
        while (ch === chars[++j] && j<n) g++
        chars.push(ch)
        if (g > 1) {
            g = g.toString().split('')
            chars.push(...g)
        }
        i = j
    }
    chars.splice(0, n)
    return chars.length
};

var compress = function (chars) {
    if(chars.length === 1) return 1
    let n = chars.length
    let i = 0
    let j = 0
    let g = 1
    while (i < n && j<n) {
        let ch = chars[i]
        if (ch === chars[++j] && j < n) {
            g++
        } else {
            chars.push(ch)
            if (g > 1) {
                g = g.toString().split('')
                chars.push(...g)
            }
            i = j
            g=1
        }
    }
    chars.splice(0, n)
    return chars.length
};



console.log(compress(["a","b","c"]))
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
console.log(compress(["a"]))
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))
console.log(compress(["a","a","a","b","b","a","a"]))
console.log(compress(["a","a","a","b","b","a","a"]))