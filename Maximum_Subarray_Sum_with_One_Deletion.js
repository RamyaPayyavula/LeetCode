/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    let Lmax0 = [arr[0]];
    let Lmax1 = [arr[0]]
    for(let i=1;i<arr.length;i++){
        Lmax0[i] = Math.max( Lmax0[i - 1] + arr[i], arr[i]);
        Lmax1[i] = Math.max( Lmax1[i - 1] + arr[i], arr[i]);
        if(i >= 2){
            Lmax1[i] = Math.max(Lmax0[i-2] + arr[i], Lmax1[i] );
        }
        
    }
    Lmax1.sort((a,b)=>a-b);
    return Lmax1[arr.length-1];
};

console.log(maximumSum([8,-1,6,-7,-4,5,-4,7,-6]))