/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

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
var searchRange = function(nums, target) {
    let res = [-1,-1];
    let indexes=[];
    let arr = nums;
    let index = binarySearch(arr,target);
    if(index === -1){
        return res;
    }
    else{
      
        indexes.push(index)
        let l = index;
        let r = index;
        while(arr[l] === arr[l-1] && l-1 >= 0){
            l=l-1;
            indexes.push(l);
        }
        while(arr[r] === arr[r+1] && r+1 < arr.length){
            r=r+1;
            indexes.push(r);
        }
        indexes.sort(function(a,b){return a-b;});
        return indexes.length >=2 ? [indexes[0],indexes[indexes.length-1]] : [indexes[0],indexes[0]];
    }
    
};

console.log(searchRange([5,7,7,8,8,10], 8));