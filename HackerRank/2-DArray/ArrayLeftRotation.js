function rotLeft(a, d) {
  const n = a.length;

  if (n >= 1 && n <= 100000 && d >= 1 && d <= n) {
    if (a.every((ele) => ele >= 1 && ele <= 1000000)) {
      const temp = a.slice(0, d);
      a.splice(0, d);
      return a.concat(temp).join(" ");
    }
  }
  return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
