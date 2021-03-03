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
    let len = s.length;
    if (len==0) return 0;
    let i=0, j=1, k=0
    while (j + k < len) {
        if (s.charAt(i + k) == s.charAt(j + k)) k++;
        else {
            if (s.charAt(i + k) < s.charAt(j + k)) i = j;
            j++;
            k = 0;
        }
    }
    return s.substring(i);
};


console.log(lastSubstring("abab"))