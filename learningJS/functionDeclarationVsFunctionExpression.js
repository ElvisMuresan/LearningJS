//EX1
function hello() {
  console.log("hello");
}

hello();

//EX2
(function hello() {
  console.log("hello");
})();

let hello1 = function () {
  console.log("hello1");
};
hello1();

let hello2 = () => {
  console.log("hello2");
};

hello2();
