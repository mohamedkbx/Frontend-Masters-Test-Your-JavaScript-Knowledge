// todo:  Which method(s) will return the value "Hello World"?
const myMap = new Map();
const myFunc = () => "greeting";
myMap.set(myFunc, "Hello World");

console.log(myMap.get(myFunc)); // this without invoke
