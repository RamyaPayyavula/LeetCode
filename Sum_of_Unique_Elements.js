/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const str = nums.join('');
    let sum = 0;
    // console.log(nums.reduce((acc,ele)=>acc+ele,0))
    for (let i = 0; i < nums.length; i++){
        const re = new RegExp(nums[i], "g");
        const count = str.match(re).length
        console.log(nums[i], count);
        if (count === 1) sum = sum + nums[i];
    }
    return sum;
};

console.log(sumOfUnique([98,8,13,39,84,56,33,31,91,92,56,99]));
// console.log(sumOfUnique([1, 1, 1, 1, 1]));
// console.log(sumOfUnique([1, 2, 3, 4, 5]));