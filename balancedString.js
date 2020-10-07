/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balancedStr = 0;
    let tempStr = s;
    if(1 <= tempStr.length && tempStr.length <=1000 && tempStr.match(/RL/i)){
       console.log('here')
       balancedStr= balancedStr+1;
    }
    
    return balancedStr;
};

balancedStringSplit('RLLLLRRRLR');