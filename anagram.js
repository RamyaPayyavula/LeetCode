const { lookup } = require("dns");

function validAnagram2(a, b) {
  var str1 = {};
  var str2 = {};
  if (a.length !== b.length) {
    return false;
  }
  for (let val in a) {
    const lookup = a[val];
    str1[lookup] = (str1[lookup] || 0) + 1;
  }
  for (let val in b) {
    const lookup = b[val];
    str2[lookup] = (str2[lookup] || 0) + 1;
  }
  for (let key in str1) {
    if (str1[key] !== str2[key]) {
      return false;
    }
  }
  return true;
}

function validAnagram(a, b) {
  var str1 = {};

  if (a.length !== b.length) {
    return false;
  }
  for (let val in a) {
    const lookup = a[val];
    str1[lookup] = (str1[lookup] || 0) + 1;
  }
  for (let i = 0; i < b.length; i++) {
    const lookup = b[i];
    if (!str1[lookup]) {
      return false;
    } else {
      str1[lookup] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qwtrey"));
