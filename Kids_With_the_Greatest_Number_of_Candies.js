/**Given the array candies and the integer extraCandies, where candies[i] represents the number of
 * candies that the ith kid has. For each kid check if there is a way to distribute extraCandies
 * among the kids such that he or she can have the greatest number of candies among them. Notice that
 * multiple kids can have the greatest number of candies. */
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  if (
    candies.length >= 2 &&
    candies.length <= 100 &&
    extraCandies >= 1 &&
    extraCandies <= 50
  ) {
    const max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
      if (1 <= candies[i] && candies[i] <= 100) {
        const sum = candies[i] + extraCandies;
        if (sum >= max) {
          candies[i] = true;
        } else {
          candies[i] = false;
        }
      }
    }
    return candies;
  } else {
    return [];
  }
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
