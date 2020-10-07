function sumofArray(sum, num) { 
    return sum + num; 
}

var rangeSumBST = function(root, L, R) {
    for(let i=0;i<root.length-1;i++) {
        for(let j=i+1;j<root.length; j++){
            if(root[i] > root[j]){
                [root[i],root[j]] = [root[j], root[i]];
            }
        }
    }
    //const arr = (root.filter((ele) => ele >= L && ele<= R)).reduce(sumofArray)
    //return arr;
    let resultArr = 0;
    for(let i=0;i<root.length;i++){
        if(root[i] >= L && root[i] <= R){
            resultArr = resultArr + root[i];
        }
    }
    console.log(resultArr);
    return resultArr;
};

rangeSumBST([10,5,15,3,7,null,18], 7, 15);