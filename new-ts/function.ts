// Regular Function
function addNum(a: number, b: number): number {
  return a + b;
}
console.log(addNum(1, 2));

// function expression
const Divide = function (a: number, b: number): number {
  return a / b;
};
console.log(Divide(10, 2));

// Arrow Function

const Multi = (a: number, b: number): number => {
  return a * b;
};
console.log(Multi(10, 2));

// optional Parameter

function One(fname: string, lname?: string): string {
  // return `First name is : ${fname} & Last name is : ${lname}`;  // without ternary operator use
  return `${fname} ${lname ? lname : ""}`; // with ternary operator use in lname
}
console.log(One("Anurag"));

// default parameter
function defaultPara(fname: string, lname: string = "hello"): string {
  return `${lname} ${fname}`;
}
console.log(defaultPara("Anurag", "Relax"));

// Function OverLoading
function valLength(value: string): number;
function valLength(value: any[]): number;
function valLength(value: any): number {
  return value.length;
}
console.log(valLength("Anurag"));

// Rest Parameter
function sum(...num: number[]): number {
  return num.reduce((total, sum) => total + sum, 0);
}
console.log(sum(1, 2, 3, 4, 5));

function para(obj: string, ...anu: string[]): void {
  anu.forEach((val) => {
    console.log(`${obj} ${val}`);
  });
}
para("anurag", "asd", "qfq", "asf");
