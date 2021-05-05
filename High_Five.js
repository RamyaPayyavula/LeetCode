/**Given a list of scores of different students, return the average score of each student's top five
 * scores in the order of each student's id. Each entry items[i] has items[i][0] the student's id,
 * and items[i][1] the student's score.  The average score is calculated using integer division. */
/**
 /**
 * @param {number[][]} items
 * @return {number[][]}
 */
// var highFive = function (items) {
//   const students = {};
//   const res = [];
//   for (let i in items) {
//     const item = items[i][0];
//     students[item] = students[item] || [];
//     if (students[item].length < 5) {
//       students[item].push(items[i][1]);
//     } else {
//       const min = Math.min(...students[item]);
//       if (min < items[i][1]) {
//         const index = students[item].indexOf(min);
//         students[item].splice(index, 1, items[i][1]);
//       }
//     }
//   }
//   for (key in students) {
//     const scores = students[key];
//     const avg = Math.floor(scores.reduce((acc, score) => score + acc) / 5, 0);
//     res.push([Number(key), avg]);
//   }
//   return res;
// };

var highFive = function (items) {
  const students = {};
  const res = [];
  for (let i in items) {
    const item = items[i][0];
    students[item] = students[item] || [];
    students[item].push(items[i][1]);
  }
  for (key in students) {
    const scores = students[key];
    scores.sort((a, b) => b - a);
    const avg = Math.floor(scores.slice(0,5).reduce((acc, score) => score + acc) / 5, 0);
    res.push([Number(key), avg]);
  }
  return res;
};

console.log(highFive([
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
]));
