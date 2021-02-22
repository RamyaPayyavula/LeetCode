/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.array = nums
    this.original = Array.from(nums)
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */

Solution.prototype.reset = function() {
    this.array = Array.from(this.original)
    return this.array
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let i = 0; i < this.array.length; i++){
        let randomIdx = Math.trunc(Math.random() * (this.array.length - i)) + i;
        [this.array[i],this.array[randomIdx]] = [this.array[randomIdx],this.array[i]]
    }
    return this.array
};

 //Your Solution object will be instantiated and called as such:
var obj = new Solution([1, 2, 3,])
var param_1 = obj.reset()
console.log(param_1)
var param_2 = obj.shuffle()
console.log(param_2)
var param_3 = obj.reset()
console.log(param_3)
 