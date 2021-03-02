var romanToInt = function (s) {
    var roman = {'I':1,'V':5, 'X':10, 'L':50, 'C':100, 'D': 500, 'M':1000}
    let sum = 0
    let i = s.length - 1
    let temp=null
    while (i >= 0) {
        const pre = roman[s[i]]
        if (temp) {
            pre >= temp ? sum = sum + pre : sum = sum - pre
        } else {
            sum = sum + pre
        }
        temp = pre
        i--
    }
    return sum
}
console.log(romanToInt("III"))