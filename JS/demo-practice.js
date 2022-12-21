// //some random values
// let values = [123, 100, 5560, 678];
// //compute total of all array elements
// //compute square of each array element
// //filter out elements based on some condition
// let total = 0;
// let squared_array = [];
// let filtered_array = [];

// //traditional(bad) approach
// for (let i = 0; i < values.length; i++) {
//   //reduce operation
//   total += values[i];
//   //map operation
//   squared_array.push(values[i] * values[i]);
//   //filter operation
//   if (values[i] >= 200) {
//     filtered_array.push(values[i]);
//   }
// }
// console.log(values);
// console.log(total);
// console.log(squared_array);
// console.log(filtered_array);

// //good practice
// total = values.reduce((total, current_value) => {
//   return total + current_value;
//   squared_array = values.map((value) => value * value);
//   filtered_array = values.filter((value) => value >= 200);
// });
// console.log(values);
// console.log(total);
// console.log(squared_array);
// console.log(filtered_array);

// var x = 0;
// //remove declaration of x
// console.log(typeof x);
// if (typeof x !== "undefined") {
//   console.log("exists");
// } else {
//   console.log("does not exist");
// }

// declaration();
// function declaration() {
//   console.log("This is function declaration");
// }
// //expression();
// var expression = function () {
//   console.log("This is function expression");
// };
// expression();

// var toPrint = "print me";
// function print(out) {
//   //remove the var keyword
//   stringToPrint = out;
//   console.log(stringToPrint);
// }
// print("Hello");
// //put "stringToPrint" at last
// console.log(stringToPrint);
"use strict";
function print(a, b, a) {
  console.log(a);
}
print(1, 2, 3);
