let a = 10;

var closure = function() {
  a = a + 10;
  var innerLoop = function() {
    return a;
  };
  return innerLoop();
};

console.log(closure());
console.log(closure());
console.log(closure());

// console.log(innerLoop());

function foo2() {
  return; // as the open brace is in the next line java script consider this as an
  //end line and adds semi colon to it. so the return code will be unreachable.
  {
    bar: "hello";
  }
}

function foo1() {
  return {
    bar: "hello"
  };
}

console.log(foo1());
console.log(foo2());
