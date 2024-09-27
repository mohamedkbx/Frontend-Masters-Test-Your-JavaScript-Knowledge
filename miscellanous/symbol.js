//todo What gets logged?

const symbolOne = Symbol.for("key");
const symbolTwo = Symbol("key");
const symbolThree = Symbol.for("key");
console.log(symbolOne === symbolTwo);
console.log(symbolTwo === symbolThree);
console.log(symbolOne === symbolThree);
console.log(symbolThree === Symbol("key"));
