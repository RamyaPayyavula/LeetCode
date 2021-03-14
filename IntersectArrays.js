/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var binarySearch = function(nums,target){
    if(nums.length === 0){
        return -1;
    }
    let left=0;
    let right=nums.length-1;
    while(left <= right){

        const mid = Math.ceil((left+right)/2);
        if(nums[mid] === target){
            return mid;

        }
        else if(nums[mid] < target){
            left = mid+1;
        }
        else {
            right =  mid-1;
        }

    }
    return -1;
}

var intersect = function(nums1, nums2) {
    const firstArr =  nums1.sort(function(a, b){return a - b});
    const secondArr =  nums2.sort(function(a, b){return a - b});
    let intersectElements=[];
    for(let i = 0; i< firstArr.length; i++){
        const res = binarySearch(secondArr, firstArr[i]);
        if(res !== -1){
            intersectElements.push(firstArr[i]);
            secondArr.splice(res, 1);

        }
    }
    //get unique values use the commented return below
    //return intersectElements.length > 0 ? intersectElements.filter((ele, i, intersectElements) => intersectElements.indexOf(ele) === i) : null;
    return intersectElements.sort(function(a, b){return a - b});
};

const A1= [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
const A2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]
console.log(intersect(A1, A2));
//[4,5,9]
//[4,4,8,9,9]