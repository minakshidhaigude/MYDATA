// call,apply,bind methods
const Employee = {
  firstName: "Minakshi",
  lastName: "Dhaigude",
  getFullName: function (city, profile) {
    //console.log(this);
    console.log(
      `Firstname:${this.firstName} Lastname:${this.lastName} and city is:${city} and profile is:${profile}`
    );
  },
};
//Employee.getFullName();

const customer = {
  firstName: "Mitali",
  lastName: "Deshmukh",
};
//function borrowing --> copy method of one object to another object
//Employee.getFullName.call(customer);
Employee.getFullName.call(customer, "Pune", "SE");
Employee.getFullName.apply(customer, ["Mumbai", "B.A"]);
