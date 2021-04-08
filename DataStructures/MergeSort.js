/**
 * 
There are three main steps:

1. Divide the list into two (or more) sublists
2. Sort each sublist (Conquer)
3. Merge them into one list intelligently.

Mergesort is a general purpose sorting algorithm that adopts a 
divide and conquer approach. It has O(n log n) time complexity 
and is sometimes used internally by JavaScript with 
Array.prototype.sort().

Time complexity of Merge Sort is \Theta(nLogn) in all 3 cases
 (worst, average and best) as merge sort always divides the array into 
 two halves and take linear time to merge two halves.
 */
var merge = function(left,right){
    let arr=[];
    while(left.length && right.length){
        if(left[0] < right[0]){
            arr.push(left.shift());
        }else{
            arr.push(right.shift());
        }
    }
    return arr.concat(left.concat(right));
}


var mergeSort = function(arr){
    if(arr.length < 2){
        return arr;
    }
    const middle = Math.ceil((arr.length -1) /2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));