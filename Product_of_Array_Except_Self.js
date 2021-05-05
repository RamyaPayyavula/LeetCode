/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//     let res = [];
//     let LeftProd = [1];
//     let rightProd = [];
//     rightProd[nums.length - 1] = 1;
//     for (let i = nums.length-2; i >=0 ; i--) {
//         rightProd[i] = rightProd[i + 1] * nums[i+1];
//     }
    
//     for (let i = 0; i < nums.length; i++) {
//         if(i!==0) LeftProd[i] = LeftProd[i - 1] * nums[i-1];
//         const product = LeftProd[i] * rightProd[i];
//         res[i] = product !== -0 ? product : 0;
//     }
//     return res;
// };

//more optimized solution
var productExceptSelf = function (nums) {
    let res = [1];
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--){
        res[i] *= right;
        right *= nums[i];
    }
    return res;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf( [-1,1,0,-3,3]));