// REST -----------------------------------------------------------------------
function sum () {
  // TODO
  var numbers = Array.prototype.slice.call(arguments);
  return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3));

// SPREAD ---------------------------------------------------------------------
function sum2 (x, y) {
  return x + y;
}

// TODO
// const nums = [1, 10];
console.log(sum2(1, 10));
