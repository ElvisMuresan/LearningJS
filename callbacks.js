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

//ex2
const a = 3;
const b = 10;
const sum = a + b;
console.log(sum);
function doSomething() {
  console.log("Something");
}
doSomething();

//ex3
document.getElementById("button").addEventListener("click", () => {
  console.log("blabla");
});

//ex4
window.addEventListener("load", () => {
  document.getElementById("button").addEventListener("click", () => {
    setTimeout(() => {
      items.forEach((item) => {
        console.log("Elvis");
      });
    }, 2000);
  });
});

//ex5
//Without callback
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  console.log(`result: ${result}`);
  result = doStep2(result);
  console.log(`result: ${result}`);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();

//Using callback
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
