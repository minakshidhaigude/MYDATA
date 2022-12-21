function User(name) {
  this.name = name;
  this.getDetail = function () {
    console.log(this.name);
  };
}
let user1 = new User("Mitali");
let user2 = new User("Ishita");
user1.getDetail();
user2.getDetail();
