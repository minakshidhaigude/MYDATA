//destructuring of object
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  address: {
    city: "Pune",
    country: "India",
  },
};
// destructuring syntax -->
//const {identifier} = expression;
/*const {
  firstName,
  lastName: lname,
  age = 20,
  address: { city },
} = user;
console.log(firstName);
console.log(lname);
console.log(age);
console.log(city);*/
const { firstName, ...userInfo } = user;
console.log(firstName);
console.log(userInfo);

//array destructuring
const scores = [12, 45, 89, 21, 90, 87, 67];
console.log(scores[0]);
const [a, b, c, d] = scores;
console.log("array destructuring", c);
const [e, ...others] = scores;
console.log(others);
