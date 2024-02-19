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

//ex3
function resolvedAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolvedAfter2Seconds();
  console.log(result);
}

asyncCall();
//ex4
function myFunction(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("Number e mai mare decat 10");
    } else {
      reject("Number e mai mic decat 10");
    }
  });
}
// myFunction(9)
//     .then((success) => {console.log(success)})
//     .catch((error) => {console.log(error)})

//Resolve with async await
async function asyncCall() {
  try {
    const result = await myFunction(11);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

asyncCall();

//ex5
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function firstOne() {
  await delay(3000);
  console.log("First one executed");
}
async function secondOne() {
  await delay(3000);
  console.log("Second one executed");
}
async function thirdOne() {
  await delay(3000);
  console.log("THird one executed");
}

async function asyncExecuteAll() {
  try {
    await firstOne();
    await secondOne();
    await thirdOne();
    console.log("All functions are executed");
  } catch (error) {
    console.log(error);
  }
}

asyncExecuteAll();
