// Given a 32-bit signed integer, reverse digits of an integer.
var reverse = function(x) {
    const arr = x.toString().split('');
    const firstElement = arr[0];
    let result;
    
    if(!isNaN(firstElement)){
        result =  arr.reverse().join('');
    }else{
        const reversedArray = arr.slice(1, arr.length).reverse();
        result = firstElement.toString().concat(reversedArray.join(''));
    }
    if(Number(result) < 2147483647 && Number(result) > -2147483648){
        return Number(result);
    }else{
        return 0;
    }
};

reverse(1534236469);