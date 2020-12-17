/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    return (K - 1).toString(2).replace(/0/g, '').length & 1
};

var kthGrammar = function(N, K) {
   
    function helper(K, maxRows=0, i=0) {
        if (K===1) return i%2
        maxRows = Math.pow(2, Math.ceil(Math.log2(K)));
        return helper(K - maxRows/2, maxRows/2, ++i)
    }
    
    return helper(K)
};
console.log(kthGrammar(1, 1));
console.log(kthGrammar(2, 1));
console.log(kthGrammar(2, 2));
console.log(kthGrammar(4, 5));