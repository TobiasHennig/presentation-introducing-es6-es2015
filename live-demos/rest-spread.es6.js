// REST -----------------------------------------------------------------------
function sum (...numbers) {
  return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3));

// SPREAD ---------------------------------------------------------------------
function sum2 (x, y) {
  return x + y;
}

// TODO
const nums = [1, 10];
console.log(sum2(...nums));
