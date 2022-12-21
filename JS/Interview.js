// question1. map vs foreach
//map return array -- have ability to chain other methods like sort(),filter(),reduce()
//forEach doesn't return array
const arr = [2, 3, 5, 7, 9];
const mapRes = arr.map((res) => {
  return res + 2;
});
console.log(arr);
console.log(mapRes);
const forRes = arr.forEach((res, i) => {
  debugger;
  arr[i] = res + 3;
});
console.log("using index", arr);

//Question2. null-- actual value as null Vs undefined-- variable is declared but not initialized value
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(null == undefined); //object
console.log(null === undefined); //false

//Question3. flatten the array
let array = [
  [1, 2],
  [3, 4],
  [5, 6],
  [78, [2, 4, 5], 3, 9],
];
console.log("flatten array", array.flat(2));
//custom flat logic
function customFlat(array, depth = 1) {
  let result = [];
  array.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else {
      result.push(ar);
    }
  });
}
//Question4. let,var,const
//const can't be re-declare or intialized const a ;can't declare const this way have to provide a value
//let can be re-intialized

//Question5: setTimeout() output
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
//a(); // for var o/p 3 3 3  using var want op 0 1 2 then use closure//for let o/p 0 1 2

//Question6: call,apply and bind
var person = {
  name: "Minakshi",
  hello: function (thing) {
    console.log(this.name + "says hello" + thing);
  },
};
//person.hello("world");
var altername = {
  name: "JavaScript",
};
person.hello.call(altername, "world");
person.hello.apply(altername, ["world"]);
const newHello = person.hello.bind(altername);
newHello("world");
//Question7: infinite currying
//Question8: composition polyfill
function addFive(a) {
  return a + 5;
}
function subtractTwo(a) {
  return a - 2;
}
function multiplyFour(a) {
  return a * 4;
}
const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};

const evaluate = compose(addFive, subtractTwo, multiplyFour);
evaluate(5); //copmose reduce from right
