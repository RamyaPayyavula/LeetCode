/** Given a non-empty array of digits representing a non-negative integer, increment one to the 
 * integer. The digits are stored such that the most significant digit is at the head of the list, 
 * and each element in the array contains a single digit. You may assume the integer does not contain 
 * any leading zero, except the number 0 itself. It's an addition with carry. */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
//https://leetcode.com/problems/plus-one/solution/
var plusOne = function (digits) {
    const len = digits.length
    if (digits[len-1] < 9) {
        digits[len - 1] += 1
        return digits
    } else {
        let i = len -1
        while (digits[i] === 9) {
            digits[i] = 0
            i--
        }
        if (i < 0) return [1, ...digits]
        else {
            digits[i] += 1
            return digits
        }
    }
 };




//posible Integer overflow error for big numbers
// var plusOne = function (digits) {
//     let res = BigInt(digits.join('')) + BigInt(1);
//     return  res.toString().split('').map((ele) => Number(ele))
// };
 


console.log(plusOne([9]));
console.log(plusOne([0,0]))
console.log(plusOne([1,2,3]));
// console.log(plusOne([4,3,2,1]));
// console.log(plusOne([0]));
// console.log(plusOne([9]));
// console.log(plusOne([9,9]));
// console.log(plusOne([8,9,9,9]));
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
