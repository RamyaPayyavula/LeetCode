/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0){
        return -1;
    }
        
    [left, right] = [0, nums.length - 1]
    while(left <= right){
        mid = Math.ceil((left + right)/2)
        if (nums[mid] == target){
            return mid;
        }
        else if(nums[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1
        }
    }
    return -1
}
console.log(search([-1,0,3,5,9,12], 9));

///[-1,0,3,5,9,12] ///2


//[2,5]

/////5