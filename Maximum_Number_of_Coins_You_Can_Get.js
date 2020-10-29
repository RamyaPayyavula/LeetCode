/**There are 3n piles of coins of varying size, you and your friends will take piles of coins as 
 * follows:
In each step, you will choose any 3 piles of coins (not necessarily consecutive).
Of your choice, Alice will pick the pile with the maximum number of coins.
You will pick the next pile with maximum number of coins.
Your friend Bob will pick the last pile.
Repeat until there are no more piles of coins.
Given an array of integers piles where piles[i] is the number of coins in the ith pile.
Return the maximum number of coins which you can have. */

function merge(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles = mergeSort(piles);
  let sum = 0;
  const start = piles.length / 3;
  for (let i = start; i < piles.length; i = i + 2) sum += piles[i];
  return sum;
};

console.log(maxCoins([2, 4, 1, 2, 7, 8]));
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
