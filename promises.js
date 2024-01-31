//ex1
const promise = new Promise((resolve, reject) => {
  resolve(); // change the status of the promise to fulfilled
  reject(); // change the status of the promise to rejected
});

console.log(promise);

//ex2
function onSuccess() {
  console.log("Success");
}

function onError() {
  console.log("Error");
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 2000);
});

promise1.then(onSuccess);
promise1.catch(onError);
