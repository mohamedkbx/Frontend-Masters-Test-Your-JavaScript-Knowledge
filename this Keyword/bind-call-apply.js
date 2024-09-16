const person = {
  fname: "MO",
  lName: "Khaled",
  getName() {
    console.log(`Welocome ${person.fname} ${person.lName}`);
  },
};

function registerUser(country) {
  this.getName();
  console.log(`Welocome ${country}`);
}
// bind
const register = registerUser.bind(person);
register("cairo");
// call
registerUser.call(person, "egypt");
// apply
registerUser.apply(person, ["germany"]);
