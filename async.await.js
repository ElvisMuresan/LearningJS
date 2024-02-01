//ex1
async function getPromise() {}
const promise = getPromise();
console.log(promise);

//ex2
async function add(x, y) {
  return x + y;
}

add(2, 3).then((result) => {
  console.log(result);
});
