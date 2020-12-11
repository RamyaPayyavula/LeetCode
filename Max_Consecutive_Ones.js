/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    nums.reduce((acc, ele,i) => {
        if (ele === 1) acc= acc + 1;
        if(ele !== 1 || i === nums.length-1){
            max = max > acc ? max : acc;
            acc= 0;
        }
        return acc;
    }, 0)
    return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0]))