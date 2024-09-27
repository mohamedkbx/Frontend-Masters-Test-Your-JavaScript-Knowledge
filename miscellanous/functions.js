//todo: what's get logged

function compareUsers(user1, user2 = user) {
  console.log(user1 === user2);
}
const user = { name: "Lydia" };
compareUsers(user, { ...user });
compareUsers(user);
compareUsers({ name: "Lydia" }, { name: "Lydia" });

// false true false

//todo: what's get logged

function thankYouTag(strings, greeting) {
  console.log(strings, greeting);
}
const greeting = "Thank you for coming to my workshop!";
thankYouTag`This is the last question! ${greeting}`;
