let originalVal = {
  name: "abc",
  age: "22",
  getName: function () {
    return this.name;
  },
  address: {
    city: "Delhi",
    country: "India",
  },
};
//let copiedVal = originalVal;
//1. using spread operator
/*let copiedVal = { ...originalVal };
copiedVal.name = "Ashwin";
console.log("original value:", originalVal);
console.log("copied value:", copiedVal);*/

//2.JSON.stringify()--> object have fuction type then JSON.stringify() not work
/*let copiedVal = JSON.parse(JSON.stringify(originalVal));
console.log("original value:", originalVal);
console.log("copied value:", copiedVal);
copiedVal.name = "Vignesh";
console.log("original value:", originalVal);
console.log("copied value:", copiedVal);*/

//let copiedVal = Object.assign({}, originalVal); // using Object.assign getting partial deep copy
let copiedVal = { ...originalVal };
// console.log("original value:", originalVal);
// console.log("copied value:", copiedVal);
copiedVal = {
  ...copiedVal,
  name: "John",
  address: {
    ...copiedVal.address,
    city: "Pune",
  },
};
// copiedVal.name = "John";
// copiedVal.address.city = "Pune";
console.log("original value:", originalVal);
console.log("copied value:", copiedVal);
