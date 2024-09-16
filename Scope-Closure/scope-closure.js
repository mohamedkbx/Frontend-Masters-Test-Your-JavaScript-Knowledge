//todo [Q1]:  What gets logged?

// const outerFunc = () => {
//   let count = 0;
//   return () => ++count;
// };
// const counter = outerFunc();
// console.log(counter());
// console.log(counter());

//todo [Q2]:  What gets logged?

// function createCounter() {
//   let globalCount = 0;
//   function incrementCount() {
//     let incrementedValue = ++globalCount;
//     return incrementedValue;
//   }
//   return { incrementCount };
// }
// const counter = createCounter();
// console.log(counter.incrementCount()); //1
// console.log(counter.incrementCount()); //2
// console.log(createCounter().incrementCount()); //1

//todo [Q3]: Is the comparison true or false?

function createUserManager() {
  let user = null;
  return function (name) {
    "use strict";
    user = { name, createdAt: Date.now() };
    return user;
  };
}
const createUser = createUserManager();
console.log(createUser("John Doe") === createUser("John Doe"));

//todo [Q4]:  What gets logged?

function createCounter(initialCount) {
  let count = initialCount;
  return function () {
    "use strict";
    count += 1;
    return count;
  };
}
const counter = createCounter(10);
counter();
counter();
console.log(counter());

//todo[Q5]Which statements are correct?
//  A
//  Hoisting is the process of moving functions and variables to the top of the file
//  B
//  Variables declared with let and const are hoisted
//  C
//  Variables declared with the var keyword are uninitialized
//  D
//  Hoisting occurs during the execution phase
//  E
//  import declarations are hoisted

//todo[Q6] What’s the output if we run this code and orange is our favorite fruit?
const input = prompt("What fruit do you like?");
const css = "color: #FFFFFF;";
switch (input) {
  case "orange":
    const css = "color: #FFA500;";
    console.log("%cOrange!", css);
    break;
  case "lemon":
    const css = "color: #FFFF00;";
    console.log("%cYellow!", css);
    break;
  default:
    console.log("No color for you");
}
