function abc() {
  console.log(arguments);
}
abc(12, 13);
abc(10, 20, 30);

const names = ["abc", "lmn", "pqr"];
const result = names.map((name) => name.toUpperCase());
console.log(`names:${result}`);

const user = {
  name: "Anisha",
  getUser: function () {
    return `Username is ${this.name}`;
  },
};
console.log(user.getUser());

//Mutable , Immutable object
let a = ["value1", "value2"];
//let b = a;
let b = [...a];
b.pop();
console.log(`value of a: ${a}`);
console.log(`value of b: ${b}`);
let c = {
  name: "Mayank",
  city: "Pune",
};
//let d = c;
//let d = Object.assign({}, c);
let d = { ...c };
//both variables c and d are pointing to different memory locations
d.age = 30;
console.log(c);
console.log(d);
// have problem in array mutable --> To make array as immutable object use spread operator
//what is spread operator
const users = ["user1", "user2"];
console.log(users);
console.log(...users);
//spread operator with array
const team1 = ["ABC", "DEF"];
const team2 = ["LMN", "PQR"];
const newTeam = [...team1, ...team2];
console.log("NewTeam:", newTeam);
//spread operator with object
const obj1 = {
  name: "SRK",
  job: "SE",
};
const obj2 = {
  salary: 50000,
  city: "Pune",
};
const obj = { ...obj1, ...obj2 };
console.log(obj);
//spread operator in function calls
console.log(Math.min(10, 60, 45, 7));
const scorelist = [100, 234, 450, 345];
console.log(Math.min(...scorelist));
console.log(Math.max(...scorelist));
//before spread operator we use apply() to achieve same thing
console.log(Math.min.apply(null, scorelist));
//immutability with spread operator
const todos = [
  {
    task: "reading",
    completed: true,
  },
  { task: "writing", completed: false },
];
function addToDo(newToDo) {
  //todos.push(newToDo);
  return [...todos, { ...newToDo }];
}
const newList = addToDo({ task: "recording", completed: false });
console.log(todos);
console.log(newList);
