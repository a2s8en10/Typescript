// number
let num: number = 21321_1412_235;
let num1: bigint = 424141212121212255215125212414n;
console.log("number :" + num);
console.log("Bigint :" + num1);

// string
let char: string = "Anurag sahu";
console.log("String :" + char);

// boolean
let hai: boolean = true;
console.log("Boolean :" + hai);

//null
let nullHai: null = null;

//undefined
let undefinedHai: undefined = undefined;
let user;
console.log(user);

//Object
let obj: object = {
  name: "anurag",
  age: 20,
};
let obj1 = {
  name: "anurag",
  age: 20,
};
let obj2: { name: string; age: number } = {
  name: "anurag",
  age: 20,
};
// Copy object
let copy = { ...obj };
let copy1 = { obj };
console.log(copy); // { name: 'anurag', age: 20 } output both ARE DIFFERENT
console.log(copy1); //{ obj: { name: 'anurag', age: 20 } } output

// change the value of object
obj = { ...obj, phone: 211241241 };
console.log(obj);

// any type
let numAny: any;
numAny = 0;
numAny = "anurag";

function anyType(val: any) {
  console.log(val);
}

//Array
let NumArray: number[] = [1, 2, 3, 4, 5];
let charArray: string[] = ["a", "b", "c"];
console.log(NumArray);
console.log(charArray);

//tuples
let arr: [number, string] = [1, "anu"];
console.log(arr);

let response: [number, string] = [200, "Ok"]; // Drawback of tuple
response.push(20);
console.log(response);

// enum

enum phone {
  R = "Realme",
  O = "Oppo",
  S = "samsung",
}
console.log(phone.O);

let anu: phone = phone.R;
console.log(anu);

// enum size {
//     small = 1,
//     medium,
//     large
// }
const enum size {
  small = 1,
  medium,
  large,
}
let Size: size = size.large;
console.log(Size);

// unknown
let notSure: unknown = "a";
if (typeof notSure === "number") {
  notSure.toFixed(2);
} else if (typeof notSure === "string") {
  notSure.length;
  console.log(notSure.length);
}
console.log(notSure);

//Never
function infiniteLoop(): never {
  while (true) {
    console.log(1);
  }
}

function throwError(massage: string): never {
  throw new Error(massage);
}
// throwError ('Galat hai')

// void type
function show(massage: string): void {
  console.log(massage);
  // return undefined;
}

// Type Inference and Type Assertions
// Inference
let relax = "Anurag Sahu"; // typescript inference the type as string

// Assertions
let pride: any = "Anurag";
let anuLength: number = (pride as string).length;

console.log(anuLength);

// union type
let id: string | number;
id = "anurag";
id = 24;

function printId(id: string | number) {
  console.log(`id: ${id}`);
}
printId("Relax");
printId(22);

// narrowing type
function printNr(id: string | number) {
  if (typeof id === "string") {
    console.log("id is a String : ", id.toUpperCase());
  } else {
    console.log("id is a Number :", id);
  }
}

// printNr("Relax-Anurag");
printNr(24);

// interface and type Alias

// interface
interface user {
  name: string;
  age: number;
}

let User: user = {
  name: "anurag",
  age: 20,
};
console.log(User.name);

// Inherit with interface using extends keyword
interface user1 extends user {
  phone: number;
}

let student: user1 = {
  name: "abc",
  age: 20,
  phone: 9939292,
};
console.log(student.phone);

// type Alias
type person = {
  name: string;
  age: number;
};

let Person: person = {
  name: "relax",
  age: 20,
};
console.log(Person.age);

// Inherit with Type Alias using &(intersection)
type person1 = person & {
  address: string;
};

let person2: person1 = {
  name: "fss",
  age: 20,
  address: "lol",
};
console.log(person2.address);

// intersection type

let detail: { name: string; age: number } & { phone: number; address: string } =
  {
    name: "anurag sahu",
    age: 20,
    phone: 3525253252352,
    address: "bhopal",
  };
console.log(detail.phone);
