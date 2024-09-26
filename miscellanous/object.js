//todo What will be the output of the following code if executed in a module?

const obj = Object.freeze({
  name: "John",
});
obj.name = "Jane";
console.log(obj.name);

// output : TypeError

// module have usestrict implicity =مهم اخد بالى من انو بيتنفذ ف موديول

// ("use strict");
// const obj = Object.freeze({
//   name: "John",
// });

// obj.name = "Jane";
// console.log(obj.name);
