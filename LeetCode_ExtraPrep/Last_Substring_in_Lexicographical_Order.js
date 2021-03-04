/**
 * @param {string} s
 * @return {string}
 */
//simple solution
var lastSubstring = function(s) {
    let subs = []
    
    for(let i=0; i<s.length; i++){
        subs.push(s.substring(i,s.length))
    }
    subs.sort()
    return subs[s.length-1]
};

//efficient two pointer time limit exceeding for some reason

/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
    let i = 0 // index of final substring.
    let j = 1 // index of lookahead possible substring.
    let k = 0 // moving offset to compare i & j.

    while (j + k < s.length) {
        if (s[i + k] < s[j + k]) {
            i = Math.max(i + k + 1, j)
            j = i + 1
            k = 0
        }

        if (s[i + k] === s[j + k]) {
            k += 1
        }

        if (s[i + k] > s[j + k]) {
            j = j + k + 1
            k = 0
        }
    }

  return s.substring(i)
};


console.log(lastSubstring("abab"))