/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0, right = letters.length - 1
    let res
    while (left <= right) {
        const mid = Math.ceil((left + right) / 2)
        if( (letters[mid] > target)){ 
            res= mid
            right = mid - 1
        } else left = mid + 1
    }
    return res ? letters[res] : letters[0]
};

console.log(nextGreatestLetter(["c", "f", "j"], "a"))
console.log(nextGreatestLetter(["c", "f", "j"], "c"))
console.log(nextGreatestLetter(["c", "f", "j"], "d"))
console.log(nextGreatestLetter(["c", "f", "j"], "g"))
console.log(nextGreatestLetter(["c", "f", "j"], "j"))
console.log(nextGreatestLetter(["c", "f", "j"], "k"))