//spread operator with arrays
let team1 = ["user1", "user2"];
let team2 = ["user3"];
let myTeam = [...team1, ...team2];
console.log(myTeam);

//copying arrays
let product = ["mobile", "phone"];

product2 = [...product];
// console.log("Product:", product);
// console.log("Product 2", product2);
product.push("LED");
console.log("Product:", product);
console.log("Product 2", product2);

// spread operator with objects
const emp = {
  name: "Minakshi",
  job: "Developer",
};
const details = {
  city: "Pune",
};
const newEmp = { ...emp }; // copying objects
console.log("EMP:", emp);
console.log(newEmp);
const empDetails = { ...emp, ...details }; //merging objects
console.log("EmpDetails:", empDetails);

//spread operator in function calls
const scores = [40, 65, 78, 93, 95];
console.log(Math.min(...scores));
console.log(Math.max(...scores));

// immutability with spread operator
const todos = [
  { task: "learning", completed: "Inprogress" },
  { task: "practicing", completed: "Done" },
];
function addToDo(newToDo) {
  //todos.push(newToDo); // its mutating original todos
  return [...todos, { ...newToDo }];
}
let newlist = addToDo({ task: "Hands_On", completed: "Done" });
console.log(todos);
console.log("newlist:", newlist);
