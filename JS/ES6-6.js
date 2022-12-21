const getFullName = function (city, profile) {
  //console.log(this);
  console.log(
    `Firstname:${this.firstName} Lastname:${this.lastName} and city is:${city} and profile is:${profile}`
  );
};
const Employee = {
  firstName: "Minakshi",
  lastName: "Dhaigude",
};
const customer = {
  firstName: "Mitali",
  lastName: "Deshmukh",
};
getFullName.call(customer, "Pune", "SE");
getFullName.apply(Employee, ["Mumbai", "B.A"]);

//bind
const handler = getFullName.bind(customer, "Nashik", "Engineer");
handler();
