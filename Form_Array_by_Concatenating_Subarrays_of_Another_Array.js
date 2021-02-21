/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function(groups, nums) {
    let i = 0
    for (let start = 0; i < groups.length && groups[i].length + start <= nums.length; start++){
        if (search(groups[i], nums, start)) {
            start += groups[i].length - 1
            i=i+1
        }
    }
    return i === groups.length
};
 var search = function(group, nums, start){
    for(let i=0;i<group.length;i++) 
        if(group[i] != nums[i+start])
             return false;
    return true;
}

// console.log(canChoose([[1,2]],[1,3,2]))
console.log(canChoose([[1, -1, -1], [3, -2, 0]], [1, -1, 0, 1, -1, -1, 3, -2, 0]))
// console.log(canChoose([[10, -2], [1, 2, 3, 4]], [1, 2, 3, 4, 10, -2]))
// console.log(canChoose([[1, 2, 3], [3, 4]], [7, 7, 1, 2, 3, 4, 7, 7]))
// console.log(canChoose([[2],[2],[2]],[2,2]))