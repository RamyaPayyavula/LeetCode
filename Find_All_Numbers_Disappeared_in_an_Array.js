/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    return nums.reduce((acc, ele, i) => nums.indexOf(i+1) === -1 ? acc.concat(i+1) : acc ,[])
};

var findDisappearedNumbers = function(nums) {
    var s = {};
    for (let i =1; i< nums.length+1; i++) {
        s[i] = 1;
    }
    
    nums.forEach(n=> {
        delete s[n];
    })
    
   return Object.keys(s)
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1,1]));