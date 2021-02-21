/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function(n) {
//     let count=0
//     for (let i = 1; i < n; i++){
//         if(isPrime(i)) count++
//     }
//     return count
// };

// var isPrime = function (num) {
//     if (num <= 1) return false
//     for (let i = 2; i * i <= num; i++){
//         if(num%i === 0) return false
//     }
//     return true
// }

//Sieve of Eratosthenes theorem
var countPrimes = function (n) {
    let isPrime =[]
    for (let i = 2; i < n; i++) {
      isPrime[i] = true;
    }
    // Loop's ending condition is i * i < n instead of i < sqrt(n)
    // to avoid repeatedly calling an expensive function sqrt().
    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) continue;
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count;
}

console.log(countPrimes(10))
console.log(countPrimes(3))