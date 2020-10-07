/**Given two integer arrays startTime and endTime and given an integer queryTime. The ith student
 * started doing their homework at the time startTime[i] and finished it at time endTime[i]. Return
 * the number of students doing their homework at time queryTime. More formally, return the number of
 *  students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive. */
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  return startTime.reduce(
    (acc, ele, i) =>
      (ele < queryTime && endTime[i] > queryTime) ||
      ele === queryTime ||
      endTime[i] === queryTime
        ? acc + 1
        : acc,
    0
  );
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
console.log(busyStudent([4], [4], 4));
console.log(busyStudent([4], [4], 5));
console.log(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7));
console.log(
  busyStudent(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10],
    5
  )
);
