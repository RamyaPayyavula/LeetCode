/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var binarySearch = function(nums, l, r, target){
    if(!nums.length) return -1;
    let [left,right] = [l,r]
    while(left<=right){
        mid = Math.ceil((left + right)/2)
        if (nums[mid] == target) return mid;
        else if(nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

var twoSum = function(numbers, target) {
    for(let i = 0; i< numbers.length; i++){
        const secondVal = target - numbers[i];
        const secondValIndex = binarySearch(numbers, i+1,numbers.length, secondVal);
        if(secondValIndex !== -1){
            return [i+1, secondValIndex+1];;
        }
    }
};