// let num: number | string = 12;
// num = "te";

// function combine(a: number, b: number) {
//   return a + b;
// }
// console.log(combine(12, 12));

function combined(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}


console.log(combined('anu','sahu'));


