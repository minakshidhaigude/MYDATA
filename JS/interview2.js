var x = 33;
var y = "33";
var z = "33";
//console.log(x + y - z - y + z);
var a = 20;
var b = "10";
var c = "20";
//console.log(a + b - c);
// function doSomething() {
//   console.log(this);
// }

// doSomething();
// var obj1 = {
//   address: "Mumbai,India",
//   getAddress: function () {
//     console.log(this.address);
//     console.log(this.name);
//   },
// };

// var getAddress = obj1.getAddress;
// var obj2 = { name: "akshay", address: "Pune" };
// obj2.getAddress();
// var obj = {
//   name: "vivek",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// var getName = obj.getName;

// var obj2 = { name: "akshay", getName };
// obj2.getName();
function sayHello() {
  return "Hello " + this.name;
}

var obj = { name: "Sandy" };

sayHello.call(obj);
