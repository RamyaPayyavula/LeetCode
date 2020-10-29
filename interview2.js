/** 
 * /**
Given an integer, write a function to determine if it is a power of two.

Example 1:

Input: 1
Output: true 
Explanation: 20 = 1
Example 2:

Input: 16
Output: true
Explanation: 24 = 16
Example 3:

Input: 218
Output: false

*/


var findDisappearedNumbers = function(nums) {
    const sizeArr = nums.length;
    let extraSpace = [];
    let i = 0
    while(i < sizeArr){
        if(!nums.includes(i+1)){
            extraSpace.push(i+1);
        }
       
        i++;
    }

    return extraSpace;
};

// findDisappearedNumbers([4,3,2,7,8,2,3,1]);

var balancedStringSplit = function(s) {
    let balancedStr = 0;
    let tempStr = s;
    if(1 <= tempStr.length && tempStr.length <=1000 && tempStr.match(/[LR]/i)){
        const NoOfL = tempStr.match(/[L]/g || []).length;
        const NoOfR = tempStr.match(/[R]/g || []).length;
        if(NoOfL === NoOfR){
            balancedStr = NoOfL;
        }
    }
    return balancedStr;
};

balancedStringSplit('RLRRLLRLRL');
