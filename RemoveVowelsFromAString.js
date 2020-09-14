/**Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string. */
/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function (S) {
  if (!S || S.length === 0 || S.length > 1000) {
    return "";
  } else {
    return S.replace(/a|e|i|o|u/gi, "");
  }
};

var removeVowels = function (S) {
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  return [...S].reduce((acc, letter) => {
    if (vowels[letter]) return acc;
    return acc + letter;
  }, "");
};

console.log(removeVowels("leetcodeisacommunityforcoders"));
console.log(removeVowels("aeiou"));
