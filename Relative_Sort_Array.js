/** Given two arrays arr1 and arr2, the elements of arr2 are distinct,and all elements in arr2 are also
 * in arr1.Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as
 * in arr2.Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.*/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = function (arr1, arr2) {
  const obj = {};
  let res = [];
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = (obj[arr1[i]] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    const newArray = Array.from({ length: obj[arr2[i]] });
    newArray.fill(arr2[i]);
    res.push(...newArray);
    delete obj[arr2[i]];
  }
  for (key in obj) {
    const newArray = Array.from({ length: obj[key] });
    newArray.fill(Number(key));
    console.log(key);
    temp.push(...newArray);
  }
  temp.sort((a, b) => a - b);
  res.push(...temp);
  return res;
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
