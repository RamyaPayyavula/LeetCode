/**Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same 
 * backward as forward. Follow up: Could you solve it without converting the integer to a string? */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev=0
    let number  = x
    while(number>0)
		{
			const rem = number%10;
			number = parseInt(number/10);
			rev = rev*10+rem;
    }
    return x === rev;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
