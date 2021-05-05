/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missingIntegers = [];
    let prev = 0;
    for (let i = 0; i < arr.length; i++){
        while ((arr[i] - prev) > 1 && prev <arr[i] ) {
            missingIntegers.push(++prev)
        }
        prev=arr[i]
    }
    if (k > missingIntegers.length) {
        const large = Math.max(missingIntegers[missingIntegers.length - 1] || 0, arr[arr.length - 1]);
        return large + (k - missingIntegers.length);
    }
    return missingIntegers[k - 1];
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));