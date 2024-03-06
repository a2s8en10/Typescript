// let sub : any;

// sub = 20;
// sub = 'relax';

// let item : string;
// item = sub ;

// console.log(item);

let data: unknown; // unknown is same as any but unknown not pass the value

data = 23;
data = "anu";

let item: string;
if (typeof data === "string") {
  item = data;
}
