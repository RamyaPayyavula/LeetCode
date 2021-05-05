function processData(input) {
    const n = input.length;
    const sum = n * (n + 1) / 2;
    let currSum = 0;
    let dict = {};
    let repeated;
    for (let i = 0; i < input.length; i++){
        if (dict[input[i]]) { repeated = input[i]; currSum += input[i]; }
        else {
            currSum += input[i];
            dict[input[i]] = 1;
        }
    }
    return [sum - (currSum - repeated), repeated];
} 

console.log(processData([3, 1, 3]));