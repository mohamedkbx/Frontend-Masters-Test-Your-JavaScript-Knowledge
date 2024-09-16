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
const obj5 = {
  logThis,
  logThis2() {
    return logThis();
  },
  logThis3() {
    return obj5.logThis();
  },
};
obj5.logThis();
obj5.logThis2();
obj5.logThis3();

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

//todo[Q4]:What gets logged?
function logThis() {
  console.log(this);
}
const obj = {
  logThis,
  logThisInArrow: () => console.log(this),
  logThisNested() {
    const nestedFunc = () => console.log(this);
    nestedFunc();
  },
};
obj.logThis(); //obj
obj.logThisInArrow(); //window
obj.logThisNested(); //obj

//todo[Q5]:What gets logged?

const obj6 = {
  logThis() {
    console.log(this);
  },
  logThis2() {
    function logThisInner() {
      console.log(this);
    }
    return logThisInner.apply(this);
  },
};
const { logThis, logThis2 } = obj6;
logThis(); //window
logThis2(); //window
obj6.logThis(); //obj
obj6.logThis2(); //obj
