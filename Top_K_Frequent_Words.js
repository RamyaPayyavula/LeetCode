/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const dict = {}, uniqueWords = [];
    for (word of words) {
        if (dict[word]) dict[word] = dict[word] + 1;
        else {
            dict[word] = 1;
            uniqueWords.push(word);
        } 
    }
    const sorted = uniqueWords.sort((a, b) => dict[b] - dict[a] || a.localeCompare(b));
    return sorted.slice(0, k);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3))
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));