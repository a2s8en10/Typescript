interface UserRecord {
  age: number;
  email: string;
  name: string;
}

// partial
console.log(`Partial--------`);

const updateUser = (user: Partial<UserRecord>) => {
  console.log(user);
};
updateUser({ name: "anurag", age: 21 });
updateUser({ email: "Anu@gamil.om " });

type userPartial = Partial<UserRecord>;
let userPartials: userPartial = {
  name: "anurag",
  age: 21,
};

console.log(userPartials);

// Required
console.log(`Required---------------`);

type userRequired = Required<UserRecord>;
let userRequireds: userRequired = {
  name: "required",
  age: 12,
  email: "@gmail.com",
};
console.log(userRequireds);

// Readonly
console.log(`Readonly----------------`);

type userRead = Readonly<userRequired>;
let userReads: userRead = {
  name: "Readonly",
  age: 12,
  email: "@gmail.com",
};
console.log(userReads);

// pick
console.log(`Pick----------------`);

type userPick = Pick<UserRecord, "name" | "age">;
let userPicks: userPick = {
  name: "Pick",
  age: 12,
};
console.log(userPicks);

// Omit
console.log("Omit----------");

type userOmit = Omit<UserRecord, "name">;
let userOmits: userOmit = {
  age: 12,
  email: "@gmail.com",
};
console.log(userOmits);

// Record
console.log("Record----------");
type Role = "AdminUser" | "UserRole" | "Guest";
type userRec = Record<Role, string>;
let userRecs: userRec = {
  AdminUser: "Anurag",
  UserRole: "Relax",
  Guest: "Pride",
};
console.log(userRecs);

// Exclude - its means cannot be pass the value in variable
console.log(`Exclude ------------`);

type userExclude = "hii" | "byy" | "hello";
type userExcludes = Exclude<userExclude, "byy">;

const varExclude: userExcludes = "hello";
const varExcludes: userExcludes = "hii";
console.log(varExcludes);
console.log(varExclude);

// Extract - its means only pass the value in variable
console.log("Extract------------");

type UserExtract = Extract<userExclude, "byy">;
const userExtracts: UserExtract = "byy";
console.log(userExtracts);

// NonNullable - its means cannot pass the null and undefine ;
console.log("NonNullable----------");

type userNull = string | null | undefined;
type userNulls = NonNullable<userNull>;

const UserNull: userNulls = "Anurag";

// ReturnType

function getname() {
  return { name: "Anurag", age: 24 };
}
type userReturn = ReturnType<typeof getname>;
const userReturns: userReturn = { name: "relax", age: 22 };

console.log(userReturns);

// parameter
console.log("parameter--------------");

function userPara(name: string, age: number) {
  console.log(`${name}, ${age}`);
}

type userParam = Parameters<typeof userPara>;
const userParams: userParam = ["relax", 0];
console.log(userParams);

// constructor parameter
console.log("constructor parameter---------------");

class userCpara {
  constructor(public name: string, public age: number) {}
}

type userCParam = ConstructorParameters<typeof userCpara>;
const userCParams: userCParam = ["Pride", 2];

console.log(userCParams);
