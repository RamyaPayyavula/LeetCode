/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    if( A.length >=3 && A.length <= 10000){
        for(let i=0; i< A.length-2; i++){
            if(A[i] < A[i+1] && A[i+1]> A[i+2] && A[i+1] >=0 && A[i+1] <= 1000000){
                return i+1;
            }
        }
    }
};

peakIndexInMountainArray([0,1,0]);
