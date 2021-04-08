var loopingATriangle = () => {
    const ch = '*';
    let temp = ch;
    for (let i = 0; i < 7; i++){
        console.log(temp);
        temp += ch;
    }
}

console.log(loopingATriangle());