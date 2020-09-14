/**Given a positive integer num consisting only of digits 6 and 9. Return the maximum number you
 * can get by changing at most one digit (6 becomes 9, and 9 becomes 6). */
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const temp = num.toString().split("");
  const index = temp.indexOf("6");
  temp.splice(index, 1, "9");
  return temp.join("");
};
console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));
