var groupAnagrams = function (strs) {
    let hash = {}
    let res = []
    let size = 0
    for (let i = 0; i < strs.length; i++){
        const str = strs[i].split('').sort().join('')
        if (!hash[str] && hash[str] !==0) {
            hash[str] = size
            res[size] = [strs[i]]
            size++
        }
        else res[hash[str]].push(strs[i])
    }
    return res
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
console.log(groupAnagrams(["","b",""]))