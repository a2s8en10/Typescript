class employee {
  //   name: "";
  //   age = 0;
  //   id = 0;
  //   email: "";

  constructor(public name, public age, public id, public email) // Shorthand method with constructor
  {
    console.log("constructor called");
    // this.name = name;
    // this.age = age;
    // this.id = id;
    // this.email = email;
  }
}

let a = new employee("Anurag sahu", 23, 3313, "anu@uhsfrg.com");
console.log(a);
