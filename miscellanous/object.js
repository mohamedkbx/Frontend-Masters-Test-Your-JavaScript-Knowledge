//todo What will be the output of the following code if executed in a module?

const obj = Object.freeze({
  name: "John",
});
obj.name = "Jane";
console.log(obj.name);

// output : TypeError

// مهم اخد بالى من انو بيتنفذ ف موديول
