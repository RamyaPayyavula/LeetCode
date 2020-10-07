'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
    if(q.length < 2){
        return 0;
    }
    let bribe =0;
    for(let i=0; i< q.length ; i++){
        if((q[i] - (i+1)) > 2){
            return 'Too chaotic';
        }
        for(let j=i+1;j<q.length;j++){
            if(q[i] > q[j]){ 
                let tmp=q[j];
                q[j]=q[i];
                q[i]=tmp;
                bribe++;
            }
        }
    }
    return bribe;
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        console.log(minimumBribes(q));
    }
}
