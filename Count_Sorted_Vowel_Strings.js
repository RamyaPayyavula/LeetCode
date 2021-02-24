/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const vowels = ["a", "e", "i", "o", "u"]
    let res = []
    var backtrack = (start, cur_list) => {
        if (cur_list.length === n) {
            res.push([...cur_list])
            return 
        }
        for (let j = start; j < 5; j++) {
            cur_list.push(vowels[j])
            backtrack(j, cur_list)
            cur_list.pop()
        } 
    }
    backtrack(0, [])
    return res
};

console.log(countVowelStrings(1))