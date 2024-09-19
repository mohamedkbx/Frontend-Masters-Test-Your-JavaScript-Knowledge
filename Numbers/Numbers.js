//todo:What gets logged?
number = 0;
console.log(number++); //0
console.log(++number); //2
console.log(number); //2
//todo:What gets logged?
// const a = 3;
// const b = new Number(3);
// const c = 3;
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);
// console.log(a.toString() === b.toString());
//output  true false false true
//todo:What gets logged?

const a = isNaN("5.2" + 2);
const b = isNaN(parseInt(a));
const c = isNaN(parseFloat(a));
const d = isNaN("1 * 2" * 2);

console.log(a, b, c, d);
