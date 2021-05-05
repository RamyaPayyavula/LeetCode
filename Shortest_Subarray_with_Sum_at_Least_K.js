/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// var shortestSubarray = function(A, K) {
//     let shortestSubArrayLen = Infinity;
//     let i = 0, j;
//     while (i < A.length) {
//         let temp = A[i];
//         j = i + 1;
//         if (A[i] >= K) {
//             return 1;
//         }
//         else {
//         while (temp< K && j < A.length && (j-i <shortestSubArrayLen)) {
//             temp = temp + A[j];
//             j++;
//         }
//         if (temp >= K) shortestSubArrayLen = Math.min(shortestSubArrayLen, j - i);
//         }
//         i++;
//     }
//     return shortestSubArrayLen !== Infinity ? shortestSubArrayLen : -1;
// };


var shortestSubarray = function(A, K) {
    let n = A.length;
    let min = n+1;
    let B = new Array(n+1).fill(0);
    for(let i=0; i<n; i++) B[i+1] = B[i] + A[i];
    let stack = [];
    for(let i=0; i<n+1; i++){
        while(stack.length > 0 && B[i]-B[stack[0]] >= K){
            min = Math.min(min, i-stack[0]);
            stack.shift();
        }
        while(stack.length > 0 && B[i] <= B[stack[stack.length-1]]){
            stack.pop();
        }
        stack.push(i);
    }
    return min <= n ? min : -1;
};

// console.log(shortestSubarray([2, -1, 2], 3));
console.log(shortestSubarray([56, -21, 56, 35, -9], 61));
// console.log(shortestSubarray([1],1));
// console.log(shortestSubarray([1,2],4));