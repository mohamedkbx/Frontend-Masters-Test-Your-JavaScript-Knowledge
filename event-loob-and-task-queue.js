// MicroTask Queue :

// async function asynFunc() {
//   console.log("asynFunc");
//   await console.log("2");
//   console.log("3");
// }

// queueMicrotask(() => console.log("1"));
// new MutationObserver(() => console.log("2"));
//########################################

// todo [Q1]: put the logs in Correct order :

// Promise.resolve().then(() => console.log(1)); //4
// queueMicrotask(() => console.log(2)); //5
// setTimeout(() => console.log(3), 0); //6
// console.log(4); //1
// new Promise(() => console.log(5)); //2
// (async () => console.log(6))(); //3

//todo[Q2]: Which of the following are not considered microtasks in
// JavaScript's event loop?
// A Script loading
// B setTimeout callback
// C mousemove event
// D requestAnimationFrame callback
// E UI rendering
// F then callback
// G new Promise executor function
// H fetch call

// Answer : a,b,c,d,e,g,h

//todo [Q3]:  Put the logs in the correct order

async function asyncFunction() {
  console.log(1); //[3]
  new Promise(() => console.log(2)); //[4]
  await new Promise((res) => {
    setTimeout(() => console.log(3), 0); //[8]
    res();
  });
}

new Promise((res) => {
  console.log(4); // [1]
  (async () => {
    console.log(5); //[2]
    await asyncFunction();
    console.log(6); //[7]
  })();
  res();
}).then(() => console.log(7)); //[6]
console.log(8); //[5]
