/**There is a special keyboard with all keys in a single row.Given a string keyboard of length 26 indicating
 * the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0. To type a character,
 * you have to move your finger to the index of the desired character. The time taken to move your finger from
 * index i to index j is |i - j|. You want to type a string word. Write a function to calculate how much time
 * it takes to type it with one finger */
/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function (keyboard, word) {
  const kb = {};
  for (i in keyboard) {
    kb[keyboard[i]] = i;
  }
  return word
    .split("")
    .reduce(
      (acc, ele, i) =>
        i === 0
          ? Number(kb[ele])
          : acc + Number(Math.abs(kb[ele] - kb[word[i - 1]])),
      0
    );
};

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba"));
