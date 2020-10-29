/**International Morse Code defines a standard encoding where each letter is mapped to a series of
 * dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on. */
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const mosreCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  const resArray = [];
  let count = 0;
  for (i in words) {
    const word = words[i];
    const temp = word
      .split("")
      .reduce((acc, ele, i) => acc + mosreCode[ele], "");
    if (resArray.indexOf(temp) === -1) {
      resArray.push(temp);
      count++;
    }
  }
  return count;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
