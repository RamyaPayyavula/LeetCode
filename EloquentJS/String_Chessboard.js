var stringChessboard = (n) => {
    const str1 = ' # # # #';
    const str2 = '# # # # ';
    for (let i = 0; i < n; i++){
        if (i % 2 === 0) console.log(str1);
        else console.log(str2);
    }
}

console.log(stringChessboard(8));