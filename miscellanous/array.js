//todo Which method should we choose so it logs { name:"Lydia", age: 25 }

// const keys = ["name", "age"];
// const values = ["Lydia", 25];
// Object.fromEntries(
//   keys.map((_, i) => {
//     return [keys[i], values[i]];
//   })
// );

//todo What gets logged?
const array = [1, 2, 3, 4, 5];
array.splice(2);
array.concat(6);
array.slice(0, 1);
delete array[0];

console.log(array.length);

// todo: What gets logged?
const config = {
  languages: [],
  set language(lang) {
    return this.languages.push(lang);
  },
};
config.language = "Dutch";
console.log(config.language);

//otput: undefind
//todo What gets logged?
const team = {
  members: [
    { info: { street: undefined, city: "Boston" } },
    { info: { street: "", city: "Boston" } },
    { info: { street: null, city: "Boston" } },
    null,
  ],
};
const getInfo = (mem) => {
  const info = mem?.info;
  return (info?.street ?? info?.city) || "Unknown";
};
const result = team.members.map(getInfo);

//output ['Boston','Unknown', 'Boston', 'Unknown']
