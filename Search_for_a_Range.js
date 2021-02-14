/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let leftIndex = -1
    let rightIndex = -1
    let index = binarySearch(nums,target);
    if(index === -1){
        return [leftIndex,rightIndex];
    }
    leftIndex = index;
    rightIndex = index;
    while(nums[leftIndex] === nums[leftIndex-1] && leftIndex-1 >= 0){
        leftIndex = leftIndex - 1
    }
    while(nums[rightIndex] === nums[rightIndex+1] && rightIndex+1 < nums.length){
        rightIndex=rightIndex+1;
    }
    return [leftIndex,rightIndex]


};  

var binarySearch = function(nums,target){
    
    if(nums.length === 0){
        return -1;
    }
    let left = 0;
    let right = nums.length -1;
    while(left <= right){
        const mid = Math.ceil((left+right)/2);
        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] < target){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return -1;
}

console.log(searchRange([5, 7, 7, 8,8, 10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([], 0))
console.log(searchRange([1], 1))
console.log(searchRange([1, 4], 2))
console.log(searchRange([1, 4], 4))
console.log(searchRange([2,2],3))