/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const romanNum = [
        1,
        4,
        5,
        9,
        10,
        40,
        50,
        90,
        100,
        400,
        500,
        900,
        1000
    ]


    const romanSym = [
        'I',
        'IV',
        'V',
        'IX',
        'X',
        'XL',
        'L',
        'XC',
        'C',
        'CD',
        'D',
        'CM',
        'M'
    ]

    let res = ''
    let i = 12
    while (num) {
        let temp = Math.trunc(num / romanNum[i])
        num = num % romanNum[i]
        console.log(temp, romanSym[i])
        while (temp > 0) {
            res = res+romanSym[i]
            temp--
        }
        i--
    }
    return res
};

console.log(intToRoman(1994))
console.log(intToRoman(3))