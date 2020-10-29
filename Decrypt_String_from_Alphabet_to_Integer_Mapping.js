/**Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase
 * characters as follows:
 *Characters ('a' to 'i') are represented by ('1' to '9') respectively.
 *Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
 *Return the string formed after mapping.
 *It's guaranteed that a unique mapping will always exist. */
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  const alpha = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    "10#": "j",
    "11#": "k",
    "12#": "l",
    "13#": "m",
    "14#": "n",
    "15#": "o",
    "16#": "p",
    "17#": "q",
    "18#": "r",
    "19#": "s",
    "20#": "t",
    "21#": "u",
    "22#": "v",
    "23#": "w",
    "24#": "x",
    "25#": "y",
    "26#": "z",
  };
  let res = "";
  let i = 0;
  const arr = s.split("");
  while (i < arr.length) {
    const index = arr.indexOf("#");
    if (i + 2 === index && i + 2 < s.length) {
      res += alpha[`${s[i]}${s[i + 1]}${s[i + 2]}`];
      arr.splice(index, 1, "%").join("");
      i = i + 2;
    } else {
      res += alpha[arr[i]];
    }
    i = i + 1;
  }
  return res;
};

console.log(freqAlphabets("10#11#12"));
console.log(freqAlphabets("1326#"));
console.log(freqAlphabets("25#"));
console.log(
  freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#")
);
