var fractionAddition = function(expression) {
    if (!expression || !expression.length) return 1 / 1;
    const sign = []
    if (expression.charAt(0) !== '-') sign.push('+');
    for (let i = 0; i < expression.length; i++){
        if (expression.charAt(i) === '+' || expression.charAt(i) === '-')
            sign.push(expression.charAt(i));
    }
    const exp = expression.split(/[+|-]/g);
    let prevNumer = 0;
    let PrevDenom = 1
    let i = 0, j = 0;
    while (i < exp.length) {
        if (exp[i].length) {
            let frac = exp[i].split('/');
            //const numerator = frac[0];
            //const denominator = frac[1];
            prevNumer = eval((prevNumer * frac[1]) + sign[j] + (frac[0] * PrevDenom));
            PrevDenom = PrevDenom * frac[1];
            j++;
        }
        i++;
    }
    if (PrevDenom !== 1) {
        const gcdVal = gcd(prevNumer, PrevDenom);
        prevNumer = prevNumer / gcdVal;
        PrevDenom = PrevDenom / gcdVal;
    }
    return prevNumer+'/'+PrevDenom ;
};

var gcd = (x, y) => {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(fractionAddition("-1/2+1/2"));
console.log(fractionAddition("-1/2+1/2+1/3"));
console.log(fractionAddition("1/3-1/2"));
console.log(fractionAddition("5/3+1/3"));
console.log(fractionAddition("-5/2+10/3+7/9"));