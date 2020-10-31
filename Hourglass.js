function hourglassSumClassic(arr) {
  const { performance } = require("perf_hooks"); //object destructuring
  const t0 = performance.now();
  let maxValue;
  let sum;

  let range = arr.every((row) => row.every((ele) => ele >= -9 && ele <= 9));
  for (let i = 0; i < arr.length - 2 && i >= 0 && i <= 5 && range; i++) {
    for (let j = 0; j < arr[i].length - 2 && j >= 0 && j <= 5; j++) {
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      maxValue = maxValue > sum ? maxValue : sum;
    }
  }
  const t1 = performance.now();
  console.log(
    `Time taken to find maximum sum of hourglass using for loops  ${
      t1 - t0
    } milliseconds.`
  );
  return maxValue;
}

function hourglassSum() {
  const { performance } = require("perf_hooks"); //object destructuring

  // const t0 = performance.now();
  let range = arr.every((row) => row.every((ele) => ele >= -9 && ele <= 9));
  return (
    range &&
    arr.reduce((accumulator, row, i) => {
      return row.reduce((max, col, j) => {
        if (j + 2 <= row.length - 1 && i + 2 <= arr.length - 1) {
          const sum =
            col +
            arr[i][j + 1] +
            arr[i][j + 2] +
            arr[i + 1][j + 1] +
            arr[i + 2][j] +
            arr[i + 2][j + 1] +
            arr[i + 2][j + 2];
          return max > sum ? max : sum;
        }
        return max;
      }, accumulator);
    }, undefined)
  );

  // const t1 = performance.now();
  // console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
  // return maxValue;
}

function subarray(arr, i, j) {
  const sum =
    arr[i][j] +
    arr[i][j + 1] +
    arr[i][j + 2] +
    arr[i + 1][j + 1] +
    arr[i + 2][j] +
    arr[i + 2][j + 1] +
    arr[i + 2][j + 2];
  return sum;
}
const arr = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7],
];
console.log(hourglassSum(arr));
console.log(hourglassSumClassic(arr));
