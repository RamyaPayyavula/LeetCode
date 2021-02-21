/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    if (s.length < 2) return "";
    const arr = s.split('');
    let set = new Set();
    for (i in arr) set.add(arr[i]);
    for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        if (set.has(c.toUpperCase(c)) && set.has(c.toLowerCase(c))) continue;
        const sub1 = longestNiceSubstring(s.substring(0, i));
        const sub2 = longestNiceSubstring(s.substring(i+1));
        return sub1.length >= sub2.length ? sub1 : sub2;
    }
    return s; 
};  
    
console.log(longestNiceSubstring('aAbcccCB'))