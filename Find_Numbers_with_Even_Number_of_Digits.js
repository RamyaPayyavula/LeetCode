/**Given an array nums of integers, return how many of them contain an even number of digits. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.reduce(
    (counter, element) =>
      `${element}`.length % 2 === 0 ? counter + 1 : counter,
    0
  );
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
