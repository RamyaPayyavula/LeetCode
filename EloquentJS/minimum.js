function minimum(a,b) {
    return a > b ? b : a;
}
console.log(minimum(10, 5));

function isEven(num) {
    if (num === 0) return true;
    if (num === 1) return false;
    return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));

function countChar(str,ch) {
    let count = 0,i=0;
    while (i < str.length) {
        if (str.charAt(i) === ch) count++;
        i++;
    }
    return count;
}

console.log(countChar('hjgdhjhfJAGDSJHVFJHDVBVHFV', 'J'));