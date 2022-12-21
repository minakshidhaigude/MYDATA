//const exampleArray = [[["one", "two", "three"]]];
//iterate the nested array --> bad practice
/*exampleArray.forEach((array1) => {
  array1.forEach((array2) => {
    array2.forEach((value) => {
      console.log(value);
    });
  });
});*/
/*var b = Array.isArray(exampleArray);
console.log(b);
const retrieveFinalValues = (element) => {
  //check if element is indeed an array

  if (Array.isArray(element)) {
    for (let i = 0; i < element.length; i++) {
      retrieveFinalValues(element[i]);
    }
  } else {
    // if not an array,print the element as it is
    console.log(element);
  }
};
retrieveFinalValues(exampleArray);*/

/*const addMulSub = (x, y, z) => {
  //addition
  const addition = x + y + z;
  //multiplication
  const multiplication = x * y * z;
  //substraction
  const substraction = x - y - z;
  //return a string with a concatenated result of each operation
  return `${addition},${multiplication},${substraction}`;
};
console.log(addMulSub(1, 2, 3));
//separate function for each operation
const doAddition = (x, y, z) => x + y + z;
const doSubstraction = (x, y, z) => x - y - z;
const doMultiplication = (x, y, z) => x * y * z;*/

const obj1 = {id:1,name:"Minakshi"};
const obj2 = {id:2,name:"Nikhil"};
const obj3 ={id=3,name:"Joel"};
console.log({obj1,obj2,obj3});
// console.log(obj2);
// console.log(obj3);
