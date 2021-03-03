

var priorityOrder = function (arr) {
    let primeList = []
    let nonPrimeList = []

    for (let i = 0; i < arr.length; i++){
        const order = arr[i].substr(arr[i].indexOf(' '))
        if (order.match(/[a-zA-Z]/g) !==null) {
            primeList.push(arr[i])
        }else nonPrimeList.push(arr[i])
    }
    primeList.sort((a, b) => {
        const orderA = a.substr(a.indexOf(' '))
        const orderB = b.substr(b.indexOf(' '))
        const id1 = a.substr(0,a.indexOf(' '))
        const id2 = b.substr(0,b.indexOf(' '))
        const comp = orderA.localeCompare(orderB)
        return comp === 0 ? id1.localeCompare(id2) : orderA.localeCompare(orderB)
    });
    return primeList.concat(nonPrimeList)
}


console.log(priorityOrder(['a12 bdc bcd efg', 'a01 bdc bcd efg', '12a 123 123 122', '1as 232 232 333', 'ab1 abc hddd sh']))