/**
 * @param {number[]} nums
 * @return {number[]}
 */
//not solved
var frequencySort = function(nums) {
    const obj = {}
    const revkey = {}
    const res = []
    const hashtable = []
    for (let i = 0; i < nums.length; i++){
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    for (key in obj) {
        // console.log('key',key,obj[key], revkey[obj[key]])
        revkey[obj[key]] = (revkey[obj[key]] || []).concat([key])
        // console.log(revkey[obj[key]])
    }
    for (let i = 0; i < nums.length;i++) {
        
    }
    console.log(obj, revkey)
};
console.log(frequencySort([1,1,2,2,2,3]))