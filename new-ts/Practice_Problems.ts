// question 1 Write a TypeScript function to calculate the factorial of a number with proper type annotations

function factorial(a: number): number {
  if (a == 0 || a == 1) return 1;
  return a * factorial(a - 1);
}
console.log(factorial(5));

//question 2 Define a function that accepts a user object (with name, age, and email) and turns a formatted string

interface userData {
  name: string;
  age: number;
  email: string;
}

function showUser(user: userData): string {
  return `My name is ${user.name} (${user.age} yrs) e-mail ${user.email}`;
}

const details: userData = {
  name: "Anurag Sahu",
  age: 20,
  email: "anurag@gmail.com",
};

console.log(showUser(details));

// question 3 Calculate Total Price: Write a TypeScript function that calculates
// the total price of an array of product objects
// Each product has a price and quantity.

interface product {
  price: number;
  quantity: number;
}

function calculate(Product: product[]): number {
  return Product.reduce(
    (total, Product) => total + Product.price * Product.quantity,
    0
  );
}

let item: product[] = [
  { price: 234, quantity: 5 },
  { price: 456, quantity: 3 },
];

console.log(calculate(item));

// question 4 . Define a union type for a Vehicle that can either
// be a Car or Bike with different properties
//  Write a function to log details based on the vehicle type

interface car {
  type: "car";
  model: string;
  make: string;
  year: number;
  color: string;
}

interface Bike {
  type: "bike";
  name: string;
  cc: number;
  year: number;
  color: string;
}

type data = car | Bike;

function vehicle(item: data) {
  if (item.type === "car") {
    console.log(
      `model : ${item.model}, make : ${item.make}, color : ${item.color}, year : ${item.year}`
    );
  } else if (item.type === "bike") {
    console.log(
      `name : ${item.name}, CC : ${item.cc}, color ${item.color}, year : ${item.year} `
    );
  }
}

let myCar: data = {
  type: "car",
  model: "TATA",
  make: "PUNCH",
  year: 1999,
  color: "Black",
};

let myBike: data = {
  type: "bike",
  name: "Boxer",
  cc: 300,
  year: 2005,
  color: "black",
};

console.log(myBike);
console.log(myCar);
