class User {
  private name: "";
  private address: "";

  setuser(name, address) {
    this.name = name;
    this.address = address;
  }

  displayuser() {
    console.log(this.name);
    console.log(this.address);
    console.log(this.userlength());
  }

  userlength()
  {
      console.log(this.name.length);
      console.log(this.address.length);
    }

}

const user = new User();
user.setuser("Anurag sahu", "M.P");
user.displayuser;


console.log(user);
