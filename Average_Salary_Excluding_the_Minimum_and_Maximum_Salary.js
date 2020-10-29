/**Given an array of unique integers salary where salary[i] is the salary of the employee i.
 * Return the average salary of employees excluding the minimum and maximum salary. */
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const len = salary.length - 1;
  if (len < 2) {
    return 0;
  }
  salary.sort((a, b) => a - b);
  salary.splice(0, 1);
  salary.splice(len - 1, 1);
  const sum = salary.reduce((acc, ele) => acc + ele, 0);
  return sum / (len - 1);
};
console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
console.log(average([1000, 2000]));
console.log(average([6000, 5000, 4000, 3000, 2000, 1000]));
console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));
