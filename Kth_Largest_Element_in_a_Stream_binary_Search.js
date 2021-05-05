
/** We're going to store the values in a sliding window of size k.
Every time we receive a value in the stream, we'll insert it in position 
using a binary search.
If the window is greater than k, we remove the first element.
The kth largest element is then the first element in the window.

Time complexity is O(log k) for each insertion
Space complexity is O(k)*/


/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = []
    nums.map((num) => this.add(num));
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    const idx = searchIndexToInsert(this.nums, val);
    // insert element
    this.nums.splice(idx, 0, val);

    if (this.nums.length === this.k + 1) {
    this.nums.shift();
    }
    return this.nums[0];
};
var searchIndexToInsert = (array, term)=> {
  let lo = 0;
  let hi = array.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    if (array[mid] - term < 0) {
      lo = mid + 1;
    } else if (array[mid] - term > 0) {
      hi = mid - 1;
    } else {
      // found, return the index
      return mid;
    }
  }
  // not found, return the index at which the value should be
  return lo;
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// const k = 3;
// nums = [4,5,8,2];
// var obj = new KthLargest(k, nums)
// console.log(obj.add(3));
// console.log(obj.add(5));
// console.log(obj.add(10));
// console.log(obj.add(9));
// console.log(obj.add(4));
// const k = 2;
// nums = [0];
// var obj = new KthLargest(k, nums)
// console.log(obj.add(-1));
// console.log(obj.add(1));
// console.log(obj.add(-2));
// console.log(obj.add(-4));
// console.log(obj.add(3));