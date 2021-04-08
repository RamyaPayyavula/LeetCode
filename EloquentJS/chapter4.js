function rangeSum(start,end) {
    let sum = 0;
    while (start <= end) {
        sum += start;
        start += 1;
    }
    return sum;
}

console.log(rangeSum(1, 10));

function ReversingArray(arr) {
    if (arr.length === 0) return;
    if (arr.length === 1) return arr[0];
    return [arr.pop()].concat(ReversingArray(arr));
}

console.log(ReversingArray([1, 2, 3, 4, 5, 6]));