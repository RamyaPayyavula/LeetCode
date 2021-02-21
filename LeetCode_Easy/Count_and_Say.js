/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1"
    let result = "1"
    while (n > 1) {
        let count = 1;
		let current = "";
        for (let i = 0; i < result.length; i++) {
			if (result[i] === result[i + 1]) {
				count++;
			} else {
				current += `${count}${result[i]}`;
				count = 1;
			}
		}
        n--
        result = current;
    }
    return result
};

console.log(countAndSay(1))
console.log(countAndSay(4))