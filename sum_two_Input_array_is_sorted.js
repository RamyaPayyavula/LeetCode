/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var binarySearch = function(nums, target){
    if(nums.length === 0){
        return -1;
    }
    let left = 0;
    let right = nums.length;
    while(left<=right){
        mid = Math.ceil((left + right)/2)
        if (nums[mid] == target){
            return mid;
        }
        else if(nums[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;
}
var twoSum = function(numbers, target) {
    for(let i = 0; i< numbers.length; i++){
        const required = target - numbers[i];
        const tempArray = numbers.slice(i+1,numbers.length);
        const secondVal = binarySearch(tempArray, required);
        if(secondVal !== -1){
            const res = [i+1, secondVal+i+2];
            return res;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2,3,4],6))
console.log(twoSum([-1, 0], -1))
console.log(twoSum([0,0,3,4],0))