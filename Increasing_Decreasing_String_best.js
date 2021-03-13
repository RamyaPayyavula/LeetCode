var sortString = function(s) {
    const n = s.length;
    const count = new Array(26).fill(0);
    
    for (const char of s) {
        const index = char.charCodeAt(0) - 97;
        count[index]++;
    }
    
    let res = "";
    
    while (res.length < n) {
        for (let j = 0; j < 26 && res.length < n; j++) {
            if (count[j] > 0) {
                
                const char = String.fromCharCode(j + 97);
                res += char;
                count[j]--;
            }
        }
        
        if (res.length === n) return res;
        
        for (let k = 25; k >= 0 && res.length < n; k--) {
            if (count[k] > 0) {
                
                const char = String.fromCharCode(k + 97);
                res += char;
                count[k]--;
            }
        }
        
        if (res.length === n) return res;
    }
};