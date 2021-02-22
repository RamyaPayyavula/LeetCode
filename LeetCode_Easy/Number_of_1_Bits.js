/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// var hammingWeight = function (n) {
//     // n.toString(2).match(/1/g)?.length ?? 0
//     // n.toString(2).replace(/0/g,"").length ?? 0
//     return n.toString(2).split('').reduce((acc,ele)=> ele === '1' ? acc+1 : acc,0)
// };

console.log(hammingWeight(00000000000000000000000000001011))
console.log(hammingWeight(00000000000000000000000010000000))
console.log(hammingWeight(11111111111111111111111111111101))
