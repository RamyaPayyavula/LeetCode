/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let res = []
    for (let i = 0; i < strs.length; i++){
        let temp = [strs[i]]
        let j = i + 1
        if(strs[i] === null) continue
        
        while (j < strs.length) {
            if (strs[j] !== null) {
                if (strs[i].length !== strs[j].length) {
                    j++
                    continue
                }
                if (isAnagram(strs[i], strs[j])) {
                    temp.push(strs[j])
                    strs[j] = null
                }
            }
            j++
        }
        res.push(temp)
        strs[i] = null
    }
    return res
};

var isAnagram = function (a, b) {
    let str1 = {}

    for (let k = 0; k < a.length; k++) {
        const lookup = a.charAt(k);
        str1[lookup] = (str1[lookup] || 0) + 1;
    }
    
    for (let k = 0; k < b.length; k++) {
        const lookup = b.charAt(k);
        if (!str1[lookup]) {
            return false;
        } else {
            str1[lookup] -= 1;
        }
    }
    return true;
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
console.log(groupAnagrams(["","b",""]))