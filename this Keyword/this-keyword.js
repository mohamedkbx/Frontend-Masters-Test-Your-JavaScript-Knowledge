// function greet(text = "Welcome") {
//   console.log(`${text}, ${this.username}`);
// }
// greet.call({ username: "John" });
// Welcome, John;
// greet.bind({ username: "John" })();
// Welcome, John;
// greet.apply({ username: "John" }, ["Hi there"]);

// todo[Q1]:What gets logged?
function logThis() {
  console.log(this);
}
const obj = {
  logThis,
  logThis2() {
    return logThis();
  },
  logThis3() {
    return obj.logThis();
  },
};
obj.logThis();
obj.logThis2();
obj.logThis3();

//todo[Q2]:What will the this keyword refer to for each invocation
const objA = {
  foo() {
    console.log(this);
  },
  bar: () => console.log(this),
};
const objB = {
  foo: objA.foo,
  bar: () => objA.bar(),
  baz() {
    objA.foo();
  },
};
objB.foo(); //objB
objB.bar(); //window
objB.baz(); //objA

//todo[Q3]:What gets logged?

function logThis() {
  console.log(this);
}
const obj1 = {
  foo: logThis,
  bar: () => logThis(),
  baz() {
    logThis();
  },
  qux() {
    logThis.call(this);
  },
};
const obj2 = { ...obj1, foo2: () => obj1.foo() };
for (const key in obj2) {
  obj2[key]();
}
