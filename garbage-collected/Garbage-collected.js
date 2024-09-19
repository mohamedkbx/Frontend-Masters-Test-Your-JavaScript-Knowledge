let obj = {
  age: 25,
  address: {
    street: "Main St",
  },
};
const address = obj.address;
console.log("🚀 ~ address:", address);
obj = null;
// address هنا عبارة عن اوبجيكت برضو فاا مشاور عليه بس
console.log("🚀 ~ address:", address);
//#######################################################
//todo:When will  inner  function be eligible for garbage collection?
function outer() {
  return function inner() {
    console.log("Inner function");
  };
}
const outerFunction = outer();
// answer :By explicitly setting  outerFunction to null
//#######################################################
//todo :Which statements are true regarding this code snippet?
let obj1 = { a: { b: 1 } };
let ref = obj1.a;
obj = null;
/*
The object { b: 1 } will be garbage collected
 
ref still references { b: 1 }, so it won’t be garbage collected // true 
 
The entire obj object is retained in memory due to the reference in ref
 
Setting obj to null frees all memory associated with it
 */
//todo :You can get a list of all keys in a WeakMap using its keys method, but you can not get its values
//anwser : false
//todo: When will each user be eligible for garbage collection?
function myFunc() {
  for (let i = 0; i < 3; i++) {
    const user = { name: "John Doe" };
    return user;
  }
}

/*
Immediately after each iteration //true
After the loop completes
Only if explicitly set to null within the loop
When the function containing the loop finishes execution
 */
//todo:hat gets logged?
const obj2 = {
  bar() {
    console.log(this);
  },
};
setTimeout(() => obj2.bar(), 0);
queueMicrotask(() => delete obj2.bar);

// output: TypeError
