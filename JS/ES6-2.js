function sum(...values) {
  let sum = 0;
  values.map((d) => (sum += d));
  console.log("sum", sum);
}
function mul(...values) {
  let number = 1;
  values.map((n) => (number *= n));
  console.log("mul", number);
}
// sum(3, 4);
// sum(3, 4, 5);
// sum(1, 2, 3, 4, 5);
function calculate(type, ...values) {
  type(...values); //behind the seen it will call sum()
}
calculate(sum, 10, 20, 30);
calculate(mul, 10, 20);

//map
const users2 = [
  {
    id: 101,
    name: "John",
  },
  { id: 102, name: "Anisha" },
  { id: 103, name: "Vignesh" },
  { id: 104, name: "Joel" },
];
const newUsers = users2.map((r) => r.name);
console.log(newUsers);

//filter
const emp = [
  { id: 101, name: "John", profile: "Junior Developer" },
  { id: 102, name: "Anisha", profile: "Senior Developer" },
  { id: 103, name: "Joel", profile: "Senior Developer" },
];
const newEmp = emp.filter((e) => {
  return e.profile === "Junior Developer";
});
console.log("Junior Developer:", newEmp);
//reduce
const score = [123, 345, 678, 100, 5];
let totalScore = score.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log("totalscore is:", totalScore);
