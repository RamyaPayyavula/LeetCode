/**Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn]. */
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let insertPosition = 1;
  while (n < nums.length - 1) {
    let removeElement = nums.splice(n, 1);
    nums.splice(insertPosition, 0, ...removeElement);
    insertPosition += 2;
    n += 1;
  }

  return nums;
};

var shuffle = function (nums, n) {
  //   let res = [];
  if (1 <= n <= 500 && nums.length === 2 * n) {
    for (let i = 0; i < n; i++) {
      if (
        1 <= nums[i] &&
        nums[i] <= 1000 &&
        1 <= nums[n + i] &&
        nums[n + i] <= 1000
      ) {
        res = res.concat([nums[i], nums[n + i]]);
      }
    }
  }
  return res;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffle([1, 1, 2, 2], 2));
