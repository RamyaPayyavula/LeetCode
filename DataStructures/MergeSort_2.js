var merge = function (arr1, arr2) {
    let i = 0, j = 0;
    let arr = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    if (i < arr1.length) arr.push(...arr1.slice(i));
    if (j < arr2.length) arr.push(...arr2.slice(j));
    return arr;
}

var mergeSort = function (arr) {
    if (arr.length < 2) return arr;
    const middle = Math.ceil((arr.length - 1) / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));