/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */


// var removeDuplicates = function(s, k) {
//     if (s.length === 0 || k===0) return s;
//     let removed = false;
    
//     do {
//         let removedCount = 0;
//         for (let i = 0, j = 1; i < s.length && j < s.length; i++){
//             while (s.charAt(i) === s.charAt(j) && j - i < k) {
//                 j++;
//             }
//             if (j - i === k) {
//                 s = s.substring(0, i) + s.substring(j);
//                 i = j-1;
//                 removedCount++;
//             }
//         }
//         if (removedCount) removed = true; else removed = false;
//     } while (removed);
//     return s;
// };


//brute force solution
// var removeDuplicates = ( s,  k)=> {
//     let length = -1;
//     while (length != s.length) {
//         length = s.length;
//         for (let i = 0, count = 1; i < s.length; ++i) {
//             if (i == 0 || s[i] != s[i - 1]) {
//                 count = 1;
//             } else if (++count == k) {
//                 s = s.substring(0, i-k+1) + s.substring(i+1);
//                 break;
//             }
//         }
//     }
//     return s;
// }



console.log(removeDuplicates("abcd", 2));
console.log(removeDuplicates("deeedbbcccbdaa", 3));