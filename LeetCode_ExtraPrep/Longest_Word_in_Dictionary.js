/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let map = new Map();
    let longest = "", longestLength = 0;
    words.sort((a,b)=>a.length - b.length);
    for(let i = 0; i<words.length; i++){
        if(words[i].length==1 || map.get(words[i].slice(0, words[i].length-1))){
            if(!longestLength){
                longestLength = words[i].length;
                longest = words[i];
            } else {
                longest = longest.length < words[i].length ? words[i]: words[i]<longest? words[i]: longest;
            }
            map.set(words[i], 1);
        }
    }
    return longest;
};

console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]))
console.log(longestWord(["b", "br", "bre", "brea", "break", "breakf", "breakfa", "breakfas", "breakfast", "l", "lu", "lun", "lunc", "lunch", "d", "di", "din", "dinn", "dinne", "dinner"]))
console.log(longestWord(["yo","ew","fc","zrc","yodn","fcm","qm","qmo","fcmz","z","ewq","yod","ewqz","y"]))