// function fruit() {
//   console.log(name);
//   console.log(price);
//   var name = "Minakshi";
//   let price = 20;
// }
// fruit();

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i), 1;
//   });
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i), 1;
//     });
//   }

// console.log(+true); // '+' convert boolean and string data type into number
// console.log(typeof +true);

// console.log(!"Minakshi");
// console.log(!!"Minakshi"); //!! (double negation) converts string into boolean true
// console.log(typeof "Minakshi");

// let data = "size";
// const bird = {
//   size: "small",
// };
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

// let c = { name: "manu" };
// let d;
// d = c;
// c.name = "mitali";
// console.log(d.name);

// var x;
// var x = 10;
// console.log(x);

// var x;
// let x = 10;
// console.log(x);

// let a = 3;
// let b = new Number(3); //typeof new with Number is 'object'
// console.log(a == b); //true
// console.log(a === b); //false

// let name;
// nmea = {}; //typo -- declared another variable don't confuse
// console.log(name); //undefined

// function fruit() {
//   console.log("Apple");
// }
// fruit.name = "orange"; //this property does not affect
// fruit();

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2"));

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// function getAge(...args) {
//   console.log(typeof args); //object
// }
// getAge(21);

// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }
// getAge();

// const sum = eval("10*10+5");
// console.log(sum);

//How long is cool_secret accessible?
//sessionStorage.setItem("cool_secret", 123);
//sessionstorage will automatically remove when we close the tab/browser

// const obj = {
//   1: "a",
//   2: "b",
//   3: "c",
// };
// console.log(obj.hasOwnProperty(1));
// console.log(obj.hasOwnProperty("1"));

// const obj = { a: "one", b: "two", a: "repeat" };
// console.log(obj);

// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue; // it will skip only i===3 loop
//   console.log(i); // 0 1 2 4
// }

// const foo = () => {
//   console.log("first");
// };
// const bar = () =>
//   setTimeout(() => {
//     console.log("Second");
//   });
// const baz = () => {
//   console.log("third");
// };
// bar(); //setTimeout function executes after normal function execution
// foo();
// baz();
