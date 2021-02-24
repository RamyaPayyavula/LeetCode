

/**
 * @param {number[]} A
 * @return {number[]}
 */

var partition = function(A,left,right){
    const pivot = A[Math.floor((left+right)/2)];
    let i = left;
    let j = right;
    while(i <= j){
        while(A[i] < pivot){
            i++;
        }
        while(A[j] > pivot){
            j--;
        }
        if(i <= j){
            const temp = A[i];
            A[i]=A[j];
            A[j]=temp;
            i++;
            j--;
            // swaps = swaps+1;;
        }
    }

    return i;

}

var quickSort = function(A,left,right){

    if(A.length > 1){
        index = partition(A, left, right);
        if(left < index-1){
            quickSort(A, left, index-1);
        }
        if(index < right){
            quickSort(A,index, right);
        }
    }

    return A;
}

console.log(quickSort([1,3,5,2,4,6,7],0,6));
// console.log(quickSort([1,4,2,7,3,9,5],0,6));