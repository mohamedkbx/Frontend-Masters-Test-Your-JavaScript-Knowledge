// todo[Q1]Creating a new  User  instance would create a  new  login  function in memory each time => anwser : false
// class User {
//   constructor(username) {
//     this.username = username;
//   }
//   login() {}
// }
// const user1 = new User("johndoe");
// const user2 = new User("janedoe");
//#########################################
// todo[Q2]:Which of the following statements are true?

class Dog {
  constructor(name) {
    this.username = username;
    this.wagTail = () => {
      return "Wagging tail!";
    };
  }
  bark() {
    return "Woof!";
  }
}
const dog1 = new Dog("Max");
const dog2 = new Dog("Spot");

// dog1.wagTail() === dog2.wagTail(); true

// dog1.wagTail === dog2.wagTail; false

// dog1.bark === dog2.bark; true

// Object.getPrototypeOf(dog1) === Object.getPrototypeOf(dog2);true

// dog1.constructor === dog2.constructor; true

// todo[Q2]:What gets logged?

class Counter {
  constructor(initialCount = 0) {
    this.count = initialCount;
  }
  increment() {
    return this.count++;
  }
}
const counterOne = new Counter(1);
counterOne.increment(); //2
const counterTwo = Object.create(counterOne);
counterTwo.increment(); //3
console.log(counterOne.count, counterTwo.count);
// todo[Q3]:What gets logged?
class Chameleon {
  constructor(color = "green") {
    this.color = color;
  }
  static changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
}
const freddie = new Chameleon("green");
freddie.changeColor("orange");

//output : typeError

// todo[Q4]:Which of the following statements are true?
class User {
  constructor(username) {
    this.username = username;
  }
  login() {}
}
const user = new User("johndoe");

// Object.getPrototypeOf(user) === User.prototype  [true]

//  Object.getPrototypeOf(user) === Object.getPrototypeOf(User)  [false]

//  user.prototype === User.prototype [false]

//  Object.getPrototypeOf(user) === User.constructor [false]
