// function minimumBribes(q) {
//   if (q.length < 2) {
//     return 0;
//   }
//   let bribe = 0;
//   for (let i = 0; i < q.length; i++) {
//     if (q[i] - (i + 1) > 2) {
//       return "Too chaotic";
//     }
//     for (let j = i + 1; j < q.length; j++) {
//       if (q[i] > q[j]) {
//         let tmp = q[j];
//         q[j] = q[i];
//         q[i] = tmp;
//         bribe = bribe + 1;
//       }
//     }
//   }
//   return bribe;
// }
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open(
  "POST",
  "https://qo6mgsy246.execute-api.us-east-1.amazonaws.com/Dev/compare-yourself"
);
xhr.onreadystatechange = function (event) {
  console.log(event);
};
xhr.send();

var xhr = new XMLHttpRequest();

xhr.open(
  "POST",
  "https://qo6mgsy246.execute-api.us-east-1.amazonaws.com/Dev/compare-yourself"
);
xhr.onreadystatechange = function (event) {
  console.log(event.target.response);
};
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ age: 28, height: 32, income: 2000 }));

xhr.open(
  "GET",
  "https://qo6mgsy246.execute-api.us-east-1.amazonaws.com/Dev/compare-yourself/single"
);

xhr.open(
  "DELETE",
  "https://qo6mgsy246.execute-api.us-east-1.amazonaws.com/Dev/compare-yourself"
);
