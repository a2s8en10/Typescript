let arr: string[] = ["php", "js", "ts", "node"];

arr.push("c");

let num: [number, string, boolean] = [121, "ts", true]; // if array length is fix then use is best but array length is not fix then use is worst.

let val: any[] = [123, "ts", true]; // this is best method for array because not decide for array length

// or same method

let fun = [123, "ts", true]; // same as any

console.warn(arr);
console.warn(num);
console.warn(val);
console.warn(fun);


