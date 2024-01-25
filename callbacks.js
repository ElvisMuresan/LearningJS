//ex1
function add(x, y) {
  console.log(x);
  console.log(y);
  return x + y;
}

function higherOrderFunction(y, callback) {
  return callback(5, y);
}

const result = higherOrderFunction(10, add);
console.log(result);
